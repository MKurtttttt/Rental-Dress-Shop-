const express = require('express')
const router = express.Router()
const { submitInquiry, getInquiries } = require('../controllers/inquiryController')
const { validateInquiry } = require('../middleware/validation')
const { sanitizeInquiry } = require('../middleware/sanitize')

// POST /api/inquiries - Submit a new inquiry
router.post('/', validateInquiry, sanitizeInquiry, submitInquiry)

// GET /api/inquiries - Get all inquiries
router.get('/', getInquiries)

module.exports = router
