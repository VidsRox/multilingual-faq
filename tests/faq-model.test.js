// tests/faq-model.test.js
const { expect } = require('chai');
const mongoose = require('mongoose');
const FAQ = require('..//src/models/faq.model');

describe("FAQ Model", () => {
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

  it("should return original question and answer if no translation exists", () => {
    const faq = new FAQ({
      question: "What is Node.js?",
      answer: "Node.js is a runtime environment."
    });
    const translation = faq.getTranslated("es");
    expect(translation.question).to.equal("What is Node.js?");
    expect(translation.answer).to.equal("Node.js is a runtime environment.");
    expect(translation.language).to.equal("en");
  });
});
