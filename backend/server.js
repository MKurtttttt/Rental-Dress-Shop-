const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const { connectDB } = require('./config/database')
const { killPort } = require('./utils/portHandler')
const { requestLogger } = require('./middleware/logger')
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler')
const apiRoutes = require('./routes')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))

// Request logging middleware
app.use(requestLogger)

// Body parser with size limits
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

// Routes
app.use('/api', apiRoutes)

// 404 handler for undefined routes
app.use(notFoundHandler)

// Global error handler
app.use(errorHandler)

// Start server with automatic port conflict handling
const startServer = async () => {
  // Connect to MongoDB first
  await connectDB()
  
  // Check and kill any process using the port before starting
  await killPort(PORT)
  
  try {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
      console.log(`Database: MongoDB`)
      console.log(`\nReady to accept requests!\n`)
    })

    server.on('error', async (error) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is still in use. Attempting to free it...`)
        await killPort(PORT)
        
        // Try again after killing the process
        setTimeout(() => {
          console.log(`Retrying to start server on port ${PORT}...`)
          startServer()
        }, 1500)
      } else {
        console.error('Server error:', error)
        process.exit(1)
      }
    })
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${PORT} is in use. Attempting to free it...`)
      await killPort(PORT)
      setTimeout(() => startServer(), 1500)
    } else {
      console.error('Failed to start server:', error)
      process.exit(1)
    }
  }
}

// Start the server
startServer()
