const express = require('express')
const timestamp = express()

timestamp.get('/api/timestamp/:date_string?', (req, res) => {
  res.send('timestamp')
})

module.exports = timestamp
