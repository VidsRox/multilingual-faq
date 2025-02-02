const express = require('express');
const router = express.Router();
const { getFAQs, createFAQ } = require('../controllers/faq-controller');

router.get('/faqs', getFAQs);
router.post('/faqs', createFAQ);

module.exports = router;
