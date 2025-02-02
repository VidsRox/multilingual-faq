const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/server');

describe("FAQ API", () => {
  it("should create a new FAQ", async () => {
    const res = await request(app)
      .post("/api/faqs")
      .send({ question: "What is JavaScript?", answer: "JavaScript is a programming language." });
    
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
  });

  it("should fetch all FAQs", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("should return a translated FAQ", async () => {
    // Create an FAQ first
    await request(app)
      .post("/api/faqs")
      .send({ question: "What is AI?", answer: "AI is Artificial Intelligence." });
    
    const res = await request(app).get("/api/faqs?lang=es");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });
});
