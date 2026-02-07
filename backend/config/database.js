const mongoose = require('mongoose')

/**
 * Connect to MongoDB database
 */
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/joy-tienzos-dress-shop'
    
    const conn = await mongoose.connect(mongoURI, {
      // Remove deprecated options, use defaults
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.error('MongoDB connection error:', error.message)
    process.exit(1)
  }
}

module.exports = {
  connectDB
}
