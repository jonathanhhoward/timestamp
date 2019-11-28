const router = require('express').Router()

router.get('/:date_string?', (req, res) => {
  const date = constructDate(parseIntIfUnix(req.params.date_string))

  if (date.getTime()) {
    res.json({ unix: date.getTime(), utc: date.toUTCString() })
  } else {
    res.json({ error: 'Invalid Date' })
  }
})

const parseIntIfUnix = (date_string) => {
  return /^\d{5,}$/.test(date_string)
    ? Number.parseInt(date_string, 10)
    : date_string
}

const constructDate = (date_value) => {
  return date_value ? new Date(date_value) : new Date()
}

module.exports = router
