const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name must be less than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    maxlength: [255, 'Email must be less than 255 characters'],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email']
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: {
      values: ['Gown Rental', 'Custom-Made Gown', 'Uniform Tailoring'],
      message: 'Service type must be one of: Gown Rental, Custom-Made Gown, or Uniform Tailoring'
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message must be less than 2000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'completed', 'archived'],
    default: 'new'
  }
}, {
  timestamps: true // Adds createdAt and updatedAt automatically
})

// Create index on email for faster queries
inquirySchema.index({ email: 1 })
inquirySchema.index({ createdAt: -1 })
inquirySchema.index({ status: 1 })

const Inquiry = mongoose.model('Inquiry', inquirySchema)

module.exports = Inquiry
