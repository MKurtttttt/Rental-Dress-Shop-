/**
 * Sanitize input helper
 */
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return str
  return str.trim().replace(/[<>]/g, '')
}

/**
 * Sanitize inquiry data middleware
 */
const sanitizeInquiry = (req, res, next) => {
  if (req.body) {
    req.body.name = sanitizeInput(req.body.name)
    req.body.email = sanitizeInput(req.body.email)?.toLowerCase()
    req.body.serviceType = sanitizeInput(req.body.serviceType)
    req.body.message = sanitizeInput(req.body.message)
  }
  next()
}

module.exports = {
  sanitizeInput,
  sanitizeInquiry
}
