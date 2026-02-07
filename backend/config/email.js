const nodemailer = require('nodemailer')

/**
 * Create email transporter
 */
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}

/**
 * Send inquiry confirmation to customer
 */
const sendInquiryConfirmation = async (inquiryData) => {
  const transporter = createTransporter()
  
  const customerEmailOptions = {
    from: process.env.EMAIL_USER,
    to: inquiryData.email,
    subject: 'Thank You for Your Inquiry - Joy Tienzo\'s Dress Shop',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #2c5f2d;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c5f2d; margin-bottom: 10px;">Joy Tienzo's Dress Shop</h1>
          <p style="color: #97bc62; margin: 0;">Elegance Tailored for Every Occasion</p>
        </div>
        
        <div style="background: #f9e4b7; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #2c5f2d; margin-top: 0;">Thank You for Your Inquiry!</h2>
          <p style="color: #1a1a1a; line-height: 1.6;">
            We've received your inquiry about <strong>${inquiryData.serviceType}</strong> and will get back to you within 24 hours.
          </p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
          <h3 style="color: #2c5f2d; margin-top: 0;">Inquiry Details:</h3>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Name:</strong> ${inquiryData.name}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Email:</strong> ${inquiryData.email}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Service:</strong> ${inquiryData.serviceType}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; font-style: italic;">
            ${inquiryData.message}
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background: #2c5f2d; border-radius: 10px;">
          <h4 style="color: white; margin-bottom: 15px;">Contact Information</h4>
          <p style="color: #f9e4b7; margin: 5px 0;">📍 Brgy. San Nicolas, Tarlac City</p>
          <p style="color: #f9e4b7; margin: 5px 0;">📱 0906-470-7230</p>
          <p style="color: #f9e4b7; margin: 5px 0;">✉️ tienzojoy15@gmail.com</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>&copy; 2026 Joy Tienzo's Dress Shop. All rights reserved.</p>
        </div>
      </div>
    `
  }
  
  try {
    await transporter.sendMail(customerEmailOptions)
    console.log(`Customer confirmation sent to: ${inquiryData.email}`)
  } catch (error) {
    console.error('Error sending customer email:', error)
    throw error
  }
}

/**
 * Send notification to shop owner
 */
const sendOwnerNotification = async (inquiryData) => {
  const transporter = createTransporter()
  
  const ownerEmailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
    subject: `New Inquiry: ${inquiryData.serviceType} - ${inquiryData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #2c5f2d;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c5f2d; margin-bottom: 10px;">New Customer Inquiry</h1>
          <p style="color: #97bc62; margin: 0;">Joy Tienzo's Dress Shop</p>
        </div>
        
        <div style="background: #ff6b6b; padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
          <h2 style="color: white; margin-top: 0;">🔔 New Inquiry Received!</h2>
          <p style="color: white; margin: 0;">A customer has inquired about your services</p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
          <h3 style="color: #2c5f2d; margin-top: 0;">Customer Details:</h3>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Name:</strong> ${inquiryData.name}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Email:</strong> ${inquiryData.email}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Service:</strong> ${inquiryData.serviceType}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Received:</strong> ${new Date().toLocaleString()}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; font-style: italic;">
            ${inquiryData.message}
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <a href="mailto:${inquiryData.email}" style="background: #2c5f2d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            📧 Reply to Customer
          </a>
        </div>
      </div>
    `
  }
  
  try {
    await transporter.sendMail(ownerEmailOptions)
    console.log(`Owner notification sent for inquiry from: ${inquiryData.name}`)
  } catch (error) {
    console.error('Error sending owner email:', error)
    throw error
  }
}

/**
 * Send appointment confirmation to customer
 */
const sendAppointmentConfirmation = async (appointmentData) => {
  const transporter = createTransporter()
  
  const customerEmailOptions = {
    from: process.env.EMAIL_USER,
    to: appointmentData.email,
    subject: 'Appointment Confirmed - Joy Tienzo\'s Dress Shop',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #2c5f2d;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c5f2d; margin-bottom: 10px;">Joy Tienzo's Dress Shop</h1>
          <p style="color: #97bc62; margin: 0;">Elegance Tailored for Every Occasion</p>
        </div>
        
        <div style="background: #97bc62; padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
          <h2 style="color: white; margin-top: 0;">📅 Appointment Confirmed!</h2>
          <p style="color: white; margin: 0;">Your consultation has been scheduled</p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
          <h3 style="color: #2c5f2d; margin-top: 0;">Appointment Details:</h3>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Name:</strong> ${appointmentData.name}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Email:</strong> ${appointmentData.email}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Phone:</strong> ${appointmentData.phone}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Service:</strong> ${appointmentData.serviceType}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Date:</strong> ${new Date(appointmentData.appointmentDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Time:</strong> ${appointmentData.appointmentTime}</p>
          ${appointmentData.message ? `<p style="color: #1a1a1a; margin: 5px 0;"><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; font-style: italic;">
            ${appointmentData.message}
          </div>` : ''}
        </div>
        
        <div style="background: #f9e4b7; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h4 style="color: #2c5f2d; margin-top: 0;">Important Information</h4>
          <ul style="color: #1a1a1a; line-height: 1.6;">
            <li>Please arrive 10 minutes before your scheduled time</li>
            <li>Bring any design references or measurements if applicable</li>
            <li>If you need to reschedule, please call us at least 24 hours in advance</li>
            <li>Free parking is available in front of the shop</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background: #2c5f2d; border-radius: 10px;">
          <h4 style="color: white; margin-bottom: 15px;">Contact Information</h4>
          <p style="color: #f9e4b7; margin: 5px 0;">📍 Brgy. San Nicolas, Tarlac City</p>
          <p style="color: #f9e4b7; margin: 5px 0;">📱 0906-470-7230</p>
          <p style="color: #f9e4b7; margin: 5px 0;">✉️ tienzojoy15@gmail.com</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>&copy; 2026 Joy Tienzo's Dress Shop. All rights reserved.</p>
        </div>
      </div>
    `
  }
  
  try {
    await transporter.sendMail(customerEmailOptions)
    console.log(`Appointment confirmation sent to: ${appointmentData.email}`)
  } catch (error) {
    console.error('Error sending appointment email:', error)
    throw error
  }
}

/**
 * Send appointment notification to shop owner
 */
const sendAppointmentOwnerNotification = async (appointmentData) => {
  const transporter = createTransporter()
  
  const ownerEmailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
    subject: `New Appointment: ${appointmentData.serviceType} - ${appointmentData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #2c5f2d;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c5f2d; margin-bottom: 10px;">New Appointment Scheduled</h1>
          <p style="color: #97bc62; margin: 0;">Joy Tienzo's Dress Shop</p>
        </div>
        
        <div style="background: #97bc62; padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
          <h2 style="color: white; margin-top: 0;">📅 New Appointment Booked!</h2>
          <p style="color: white; margin: 0;">A customer has scheduled a consultation</p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
          <h3 style="color: #2c5f2d; margin-top: 0;">Appointment Details:</h3>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Name:</strong> ${appointmentData.name}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Email:</strong> ${appointmentData.email}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Phone:</strong> ${appointmentData.phone}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Service:</strong> ${appointmentData.serviceType}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Date:</strong> ${new Date(appointmentData.appointmentDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Time:</strong> ${appointmentData.appointmentTime}</p>
          <p style="color: #1a1a1a; margin: 5px 0;"><strong>Booked:</strong> ${new Date().toLocaleString()}</p>
          ${appointmentData.message ? `<p style="color: #1a1a1a; margin: 5px 0;"><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; font-style: italic;">
            ${appointmentData.message}
          </div>` : ''}
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <a href="mailto:${appointmentData.email}" style="background: #2c5f2d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px;">
            📧 Email Customer
          </a>
          <a href="tel:${appointmentData.phone}" style="background: #97bc62; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px;">
            📱 Call Customer
          </a>
        </div>
      </div>
    `
  }
  
  try {
    await transporter.sendMail(ownerEmailOptions)
    console.log(`Appointment notification sent for: ${appointmentData.name}`)
  } catch (error) {
    console.error('Error sending appointment owner email:', error)
    throw error
  }
}

module.exports = {
  sendInquiryConfirmation,
  sendOwnerNotification,
  sendAppointmentConfirmation,
  sendAppointmentOwnerNotification
}
