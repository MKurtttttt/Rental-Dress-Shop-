const Appointment = require('../models/Appointment')
const { sendAppointmentConfirmation, sendAppointmentOwnerNotification } = require('../config/email')

/**
 * Book a new appointment
 */
const bookAppointment = async (req, res) => {
  try {
    const { name, email, phone, serviceType, appointmentDate, appointmentTime, message } = req.body

    // Check if the time slot is already booked
    const existingAppointment = await Appointment.findOne({
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
      status: { $ne: 'cancelled' }
    })

    if (existingAppointment) {
      return res.status(409).json({
        success: false,
        error: 'This time slot is already booked. Please choose another time.'
      })
    }

    // Create new appointment
    const appointment = new Appointment({
      name,
      email,
      phone,
      serviceType,
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
      message
    })

    const savedAppointment = await appointment.save()

    // Send email notifications
    try {
      await sendAppointmentConfirmation(savedAppointment)
      await sendAppointmentOwnerNotification(savedAppointment)
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
      // Don't fail the appointment if email fails
    }

    console.log(`Appointment booked: ${savedAppointment._id} - ${name} (${email})`)
    
    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      appointment: {
        id: savedAppointment._id,
        name: savedAppointment.name,
        email: savedAppointment.email,
        serviceType: savedAppointment.serviceType,
        appointmentDate: savedAppointment.appointmentDate,
        appointmentTime: savedAppointment.appointmentTime,
        status: savedAppointment.status,
        createdAt: savedAppointment.createdAt
      }
    })
  } catch (error) {
    console.error('Error booking appointment:', error)
    
    // Handle validation errors from Mongoose
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message)
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        errors
      })
    }
    
    // Handle duplicate key error (double booking)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error: 'This time slot is already booked. Please choose another time.'
      })
    }
    
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    })
  }
}

/**
 * Get available time slots for a specific date
 */
const getAvailableSlots = async (req, res) => {
  try {
    const { date } = req.query
    
    if (!date) {
      return res.status(400).json({
        success: false,
        error: 'Date parameter is required'
      })
    }

    const targetDate = new Date(date)
    const allSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']
    
    // Get booked slots for the date
    const bookedAppointments = await Appointment.find({
      appointmentDate: targetDate,
      status: { $ne: 'cancelled' }
    }).select('appointmentTime')

    const bookedSlots = bookedAppointments.map(apt => apt.appointmentTime)
    const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot))

    res.json({
      success: true,
      date: targetDate,
      availableSlots,
      bookedSlots
    })
  } catch (error) {
    console.error('Error getting available slots:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
}

/**
 * Get all appointments (for admin)
 */
const getAppointments = async (req, res) => {
  try {
    const { status, date, limit } = req.query
    
    // Build filter object
    const filters = {}
    if (status) filters.status = status
    if (date) {
      const startDate = new Date(date)
      const endDate = new Date(date)
      endDate.setDate(endDate.getDate() + 1)
      filters.appointmentDate = {
        $gte: startDate,
        $lt: endDate
      }
    }

    let query = Appointment.find(filters).sort({ appointmentDate: 1, appointmentTime: 1 })
    
    if (limit && !isNaN(limit)) {
      query = query.limit(parseInt(limit))
    }
    
    const appointments = await query.exec()

    res.json({
      success: true,
      count: appointments.length,
      appointments: appointments.map(apt => ({
        id: apt._id,
        name: apt.name,
        email: apt.email,
        phone: apt.phone,
        serviceType: apt.serviceType,
        appointmentDate: apt.appointmentDate,
        appointmentTime: apt.appointmentTime,
        message: apt.message,
        status: apt.status,
        notes: apt.notes,
        createdAt: apt.createdAt,
        updatedAt: apt.updatedAt
      }))
    })
  } catch (error) {
    console.error('Error fetching appointments:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
}

/**
 * Update appointment status (for admin)
 */
const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status, notes } = req.body

    if (!['scheduled', 'confirmed', 'cancelled', 'completed'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status'
      })
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status, notes, updatedAt: new Date() },
      { new: true, runValidators: true }
    )

    if (!appointment) {
      return res.status(404).json({
        success: false,
        error: 'Appointment not found'
      })
    }

    res.json({
      success: true,
      message: 'Appointment updated successfully',
      appointment: {
        id: appointment._id,
        name: appointment.name,
        email: appointment.email,
        serviceType: appointment.serviceType,
        appointmentDate: appointment.appointmentDate,
        appointmentTime: appointment.appointmentTime,
        status: appointment.status,
        notes: appointment.notes,
        updatedAt: appointment.updatedAt
      }
    })
  } catch (error) {
    console.error('Error updating appointment:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
}

module.exports = {
  bookAppointment,
  getAvailableSlots,
  getAppointments,
  updateAppointmentStatus
}
