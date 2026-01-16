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

module.exports = {
  validateInquiry
}
