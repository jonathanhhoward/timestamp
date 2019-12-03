const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

const timestamp = require('./timestamp')
app.use('/api/timestamp', timestamp)

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    'Server listening at http://%s:%s',
    server.address().host || 'localhost',
    server.address().port
  )
})
