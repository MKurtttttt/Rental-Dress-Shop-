const { readInquiries, writeInquiry } = require('../utils/fileHandler')

/**
 * Submit a new inquiry
 */
const submitInquiry = async (req, res) => {
  try {
    const { name, email, serviceType, message } = req.body

    // Save inquiry to MongoDB
    const inquiry = await writeInquiry({
      name,
      email,
      serviceType,
      message,
      status: 'new'
    })

    console.log(`Inquiry submitted: ${inquiry._id} - ${name} (${email})`)
    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      inquiry: {
        id: inquiry._id,
        createdAt: inquiry.createdAt
      }
    })
  } catch (error) {
    console.error('Error processing inquiry:', error)
    
    // Handle validation errors from Mongoose
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message)
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        errors
      })
    }
    
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    })
  }
}

/**
 * Get all inquiries with optional filtering
 */
const getInquiries = async (req, res) => {
  try {
    const { status, serviceType, limit } = req.query
    
    // Build filter object
    const filters = {}
    if (status) filters.status = status
    if (serviceType) filters.serviceType = serviceType

    // Get inquiries from MongoDB
    const inquiries = await readInquiries(filters, limit)

    res.json({
      success: true,
      count: inquiries.length,
      inquiries: inquiries.map(inq => ({
        id: inq._id,
        name: inq.name,
        email: inq.email,
        serviceType: inq.serviceType,
        message: inq.message,
        status: inq.status,
        createdAt: inq.createdAt,
        updatedAt: inq.updatedAt
      }))
    })
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
}

module.exports = {
  submitInquiry,
  getInquiries
}
