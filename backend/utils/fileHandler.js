const Inquiry = require('../models/Inquiry')

/**
 * Read all inquiries from MongoDB
 * @param {Object} filters - Optional filters (status, serviceType)
 * @param {number} limit - Optional limit
 * @returns {Promise<Array>} Array of inquiry objects
 */
const readInquiries = async (filters = {}, limit = null) => {
  try {
    let query = Inquiry.find(filters).sort({ createdAt: -1 }) // Newest first
    
    if (limit && !isNaN(limit)) {
      query = query.limit(parseInt(limit))
    }
    
    const inquiries = await query.exec()
    return inquiries
  } catch (error) {
    console.error('Error reading inquiries:', error)
    return []
  }
}

/**
 * Write/save a new inquiry to MongoDB
 * @param {Object} inquiryData - Inquiry data object
 * @returns {Promise<Object>} Saved inquiry object
 */
const writeInquiry = async (inquiryData) => {
  try {
    const inquiry = new Inquiry(inquiryData)
    const savedInquiry = await inquiry.save()
    return savedInquiry
  } catch (error) {
    console.error('Error saving inquiry:', error)
    throw error
  }
}

/**
 * Get inquiry count by status
 * @returns {Promise<Object>} Count object
 */
const getInquiryCounts = async () => {
  try {
    const total = await Inquiry.countDocuments()
    const newCount = await Inquiry.countDocuments({ status: 'new' })
    return { total, new: newCount }
  } catch (error) {
    console.error('Error getting inquiry counts:', error)
    return { total: 0, new: 0 }
  }
}

module.exports = {
  readInquiries,
  writeInquiry,
  getInquiryCounts
}
