const { execSync } = require('child_process')

/**
 * Kill process using a specific port (Windows)
 * @param {number} port - Port number
 * @returns {Promise<void>}
 */
const killPort = async (port) => {
  try {
    // Find process using the port
    const result = execSync(`netstat -ano | findstr :${port}`, { 
      encoding: 'utf8', 
      stdio: 'pipe' 
    })
    const lines = result.split('\n').filter(line => line.includes('LISTENING'))
    
    if (lines.length > 0) {
      const pid = lines[0].trim().split(/\s+/).pop()
      if (pid && !isNaN(pid)) {
        console.log(`Found process ${pid} using port ${port}, freeing it...`)
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' })
          // Wait a moment for port to be released
          await new Promise(resolve => setTimeout(resolve, 1000))
          console.log(`Port ${port} is now free`)
        } catch (killError) {
          console.log(`Could not kill process ${pid} (may require admin rights)`)
        }
      }
    }
  } catch (error) {
    // Port might not be in use or command failed - that's okay, continue
  }
}

module.exports = {
  killPort
}
