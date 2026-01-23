const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
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
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number must be less than 20 characters']
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: {
      values: ['Gown Rental', 'Custom-Made Gown', 'Uniform Tailoring', 'Consultation'],
      message: 'Service type must be one of: Gown Rental, Custom-Made Gown, Uniform Tailoring, or Consultation'
    }
  },
  appointmentDate: {
    type: Date,
    required: [true, 'Appointment date is required'],
    validate: {
      validator: function(value) {
        return value > new Date() // Appointment must be in the future
      },
      message: 'Appointment date must be in the future'
    }
  },
  appointmentTime: {
    type: String,
    required: [true, 'Appointment time is required'],
    enum: {
      values: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
      message: 'Please select a valid time slot'
    }
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message must be less than 1000 characters']
  },
  status: {
    type: String,
    enum: ['scheduled', 'confirmed', 'cancelled', 'completed'],
    default: 'scheduled'
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [500, 'Notes must be less than 500 characters']
  }
}, {
  timestamps: true
})

// Create indexes for better performance
appointmentSchema.index({ appointmentDate: 1, appointmentTime: 1 })
appointmentSchema.index({ email: 1 })
appointmentSchema.index({ status: 1 })
appointmentSchema.index({ createdAt: -1 })

// Prevent double booking for the same date and time
appointmentSchema.index({ 
  appointmentDate: 1, 
  appointmentTime: 1, 
  status: { $ne: 'cancelled' } 
}, { unique: true })

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
