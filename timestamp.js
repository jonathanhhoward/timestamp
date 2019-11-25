exports.timestamp = (req, res) => {
  const date = constructDate(parseUnixOrPass(req.params.date_string))
  if (date === 'Invalid Date') {
    res.json({ error: 'Invalid Date' })
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() })
  }
}

const parseUnixOrPass = (date_string) => {
  return /^[0-9]+$/.test(date_string)
    ? Number.parseInt(date_string, 10)
    : date_string
}

const constructDate = (date_value) => {
  return date_value ? new Date(date_value) : new Date()
}
