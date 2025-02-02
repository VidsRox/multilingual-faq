const translate = require('@vitalets/google-translate-api');
const FAQ = require('../models/faq.model');
const redisClient = require('../config/redis');

const translateFAQ = async (faqId, lang) => {
  const faq = await FAQ.findById(faqId);
  if (!faq) throw new Error('FAQ not found');

  const cacheKey = `faq_${faqId}_${lang}`;
  const cachedTranslation = await redisClient.get(cacheKey);
  if (cachedTranslation) return JSON.parse(cachedTranslation);

  try {
    const translatedQuestion = await translate(faq.question, { to: lang });
    const translatedAnswer = await translate(faq.answer, { to: lang });

    // Save translation in the document's translations map
    faq.translations.set(lang, {
      question: translatedQuestion.text,
      answer: translatedAnswer.text
    });
    await faq.save();

    const result = {
      question: translatedQuestion.text,
      answer: translatedAnswer.text,
      language: lang
    };

    // Cache the result for 1 hour (3600 seconds)
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(result));

    return result;
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Error translating FAQ');
  }
};

module.exports = { translateFAQ };
