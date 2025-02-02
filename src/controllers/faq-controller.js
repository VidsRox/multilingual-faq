const FAQ = require('../models/faq.model');
const { translateFAQ } = require('../services/translation-service')

const getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || 'en';
    const faqs = await FAQ.find({});
    const translatedFAQs = faqs.map(faq => faq.getTranslated(lang));
    res.json(translatedFAQs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();

    // Auto-translate FAQ into additional languages (for example: Hindi and Bengali)
    await translateFAQ(newFAQ._id.toString(), 'hi');
    await translateFAQ(newFAQ._id.toString(), 'bn');

    res.status(201).json(newFAQ);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating FAQ' });
  }
};

module.exports = { getFAQs, createFAQ };
