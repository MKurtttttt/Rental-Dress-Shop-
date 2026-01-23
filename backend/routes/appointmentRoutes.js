const express = require('express')
const router = express.Router()
const { bookAppointment, getAvailableSlots, getAppointments, updateAppointmentStatus } = require('../controllers/appointmentController')
const { validateAppointment } = require('../middleware/validation')

// Book a new appointment
router.post('/', validateAppointment, bookAppointment)

// Get available time slots for a specific date
router.get('/slots', getAvailableSlots)

// Get all appointments (admin only)
router.get('/', getAppointments)

// Update appointment status (admin only)
router.patch('/:id/status', updateAppointmentStatus)

module.exports = router
