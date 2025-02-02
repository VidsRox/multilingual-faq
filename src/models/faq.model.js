const mongoose = require('mongoose')

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    type: Map,
    of: { question: String, answer: String },
    default: {}
  }
}, { timestamps: true });

// Instance method to retrieve translated content
FAQSchema.methods.getTranslated = function (lang) {
  if (this.translations.has(lang)) {
    const trans = this.translations.get(lang);
    return { question: trans.question, answer: trans.answer, language: lang };
  }
  return { question: this.question, answer: this.answer, language: 'en' };
};

const FAQ = mongoose.model('FAQ', FAQSchema);
module.exports = FAQ;
