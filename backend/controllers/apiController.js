/**
 * API information endpoint
 */
const getApiInfo = (req, res) => {
  res.json({
    message: 'Joy Tienzo\'s Dress Shop API',
    version: '1.0.0',
    status: 'Server is running',
    endpoints: {
      health: {
        method: 'GET',
        path: '/api/health',
        description: 'Health check endpoint'
      },
      submitInquiry: {
        method: 'POST',
        path: '/api/inquiries',
        description: 'Submit a new inquiry',
        body: {
          name: 'string (required, max 100 chars)',
          email: 'string (required, valid email)',
          serviceType: 'string (required: "Gown Rental", "Custom-Made Gown", or "Uniform Tailoring")',
          message: 'string (required, max 2000 chars)'
        }
      },
      getInquiries: {
        method: 'GET',
        path: '/api/inquiries',
        description: 'Get all inquiries',
        queryParams: {
          status: 'string (optional: filter by status)',
          serviceType: 'string (optional: filter by service type)',
          limit: 'number (optional: limit results)'
        }
      }
    }
  })
}

module.exports = {
  getApiInfo
}
