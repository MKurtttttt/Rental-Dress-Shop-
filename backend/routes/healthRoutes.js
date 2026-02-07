const express = require('express')
const router = express.Router()
const { getHealth } = require('../controllers/healthController')

// GET /api/health - Health check
router.get('/', getHealth)

module.exports = router
