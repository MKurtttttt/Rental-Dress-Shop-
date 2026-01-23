/**
 * Validation middleware for inquiry submission
 */
const validateInquiry = (req, res, next) => {
  const { name, email, serviceType, message } = req.body
  const errors = []

  // Validate required fields
  if (!name || name.trim().length === 0) {
    errors.push('Name is required')
  }
  if (!email || email.trim().length === 0) {
    errors.push('Email is required')
  }
  if (!serviceType || serviceType.trim().length === 0) {
    errors.push('Service type is required')
  }
  if (!message || message.trim().length === 0) {
    errors.push('Message is required')
  }

  // Validate email format
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Invalid email format')
  }

  // Validate field lengths
  if (name && name.length > 100) {
    errors.push('Name must be less than 100 characters')
  }
  if (email && email.length > 255) {
    errors.push('Email must be less than 255 characters')
  }
  if (message && message.length > 2000) {
    errors.push('Message must be less than 2000 characters')
  }

  // Validate service type
  const validServiceTypes = ['Gown Rental', 'Custom-Made Gown', 'Uniform Tailoring']
  if (serviceType && !validServiceTypes.includes(serviceType)) {
    errors.push(`Service type must be one of: ${validServiceTypes.join(', ')}`)
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      errors
    })
  }

  next()
}

/**
 * Validation middleware for appointment booking
 */
const validateAppointment = (req, res, next) => {
  const { name, email, phone, serviceType, appointmentDate, appointmentTime } = req.body
  const errors = []

  // Validate required fields
  if (!name || name.trim().length === 0) {
    errors.push('Name is required')
  }
  if (!email || email.trim().length === 0) {
    errors.push('Email is required')
  }
  if (!phone || phone.trim().length === 0) {
    errors.push('Phone number is required')
  }
  if (!serviceType || serviceType.trim().length === 0) {
    errors.push('Service type is required')
  }
  if (!appointmentDate) {
    errors.push('Appointment date is required')
  }
  if (!appointmentTime) {
    errors.push('Appointment time is required')
  }

  // Validate email format
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Invalid email format')
  }

  // Validate phone format (basic validation)
  if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
    errors.push('Invalid phone format')
  }

  // Validate field lengths
  if (name && name.length > 100) {
    errors.push('Name must be less than 100 characters')
  }
  if (email && email.length > 255) {
    errors.push('Email must be less than 255 characters')
  }
  if (phone && phone.length > 20) {
    errors.push('Phone number must be less than 20 characters')
  }

  // Validate service type
  const validServiceTypes = ['Gown Rental', 'Custom-Made Gown', 'Uniform Tailoring', 'Consultation']
  if (serviceType && !validServiceTypes.includes(serviceType)) {
    errors.push(`Service type must be one of: ${validServiceTypes.join(', ')}`)
  }

  // Validate appointment date is in the future
  if (appointmentDate) {
    const appointmentDateTime = new Date(appointmentDate)
    const now = new Date()
    if (appointmentDateTime <= now) {
      errors.push('Appointment date must be in the future')
    }
  }

  // Validate appointment time
  const validTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']
  if (appointmentTime && !validTimes.includes(appointmentTime)) {
    errors.push(`Appointment time must be one of: ${validTimes.join(', ')}`)
  }

  // Validate message length (optional field)
  if (req.body.message && req.body.message.length > 1000) {
    errors.push('Message must be less than 1000 characters')
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      errors
    })
  }

  next()
}

module.exports = {
  validateInquiry,
  validateAppointment
}
