const { getInquiryCounts } = require('../utils/fileHandler')

/**
 * Health check endpoint
 */
const getHealth = async (req, res) => {
  try {
    const counts = await getInquiryCounts()
    res.json({
      status: 'ok',
      message: 'Server is running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: 'MongoDB',
      inquiries: counts
    })
  } catch (error) {
    res.json({
      status: 'ok',
      message: 'Server is running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: 'MongoDB (connection issue)',
      inquiries: { total: 0, new: 0 }
    })
  }
}

module.exports = {
  getHealth
}
