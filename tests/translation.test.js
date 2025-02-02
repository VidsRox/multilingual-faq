// tests/translation.test.js
const { expect } = require('chai');
const mongoose = require('mongoose');
const FAQ = require('../src/models/faq.model');
const { translateFAQ } = require('../src/services/translation-service');

describe("Translation Service", () => {
  before(async () => {
    await mongoose.connect("mongodb://localhost:27017/faq_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  after(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  it("should translate an FAQ and store it in the database", async () => {
    const faq = new FAQ({
      question: "Hello, how are you?",
      answer: "I am good."
    });
    await faq.save();
    const translated = await translateFAQ(faq._id.toString(), "es");
    expect(translated.question).to.be.a("string");
    expect(translated.answer).to.be.a("string");
  });
});
