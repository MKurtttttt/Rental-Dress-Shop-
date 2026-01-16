const express = require('express')
const router = express.Router()
const { getApiInfo } = require('../controllers/apiController')
const inquiryRoutes = require('./inquiryRoutes')
const healthRoutes = require('./healthRoutes')

// Root endpoint - API information
router.get('/', getApiInfo)

// Health check routes
router.use('/health', healthRoutes)

// Inquiry routes
router.use('/inquiries', inquiryRoutes)

module.exports = router
