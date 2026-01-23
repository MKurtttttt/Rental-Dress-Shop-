const express = require('express')
const router = express.Router()
const { getApiInfo } = require('../controllers/apiController')
const inquiryRoutes = require('./inquiryRoutes')
const healthRoutes = require('./healthRoutes')
const appointmentRoutes = require('./appointmentRoutes')

// Root endpoint - API information
router.get('/', getApiInfo)

// Health check routes
router.use('/health', healthRoutes)

// Inquiry routes
router.use('/inquiries', inquiryRoutes)

// Appointment routes
router.use('/appointments', appointmentRoutes)

module.exports = router
