const express = require('express')
const app = express()

module.exports = function () {
  return function () {
    app.get('/api/timestamp/:date_string?', (req, res) => {
      const date = constructDate(parseUnixOrPass(req.params.date_string))
      res.json({ unix: date.getTime(), utc: date.toUTCString() })
    })
  }
}

function parseUnixOrPass (date_string) {
  return /^[0-9]+$/.test(date_string)
    ? Number.parseInt(date_string, 10)
    : date_string
}

function constructDate (date_value) {
  return date_value ? new Date(date_value) : new Date()
}
