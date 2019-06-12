const express = require('express')
const path = require('path')
const cors = require('cors')
const http = require('http')
const socket = require('socket.io')
const routes = require('./routes')

const app = express()
const server = http.Server(app)
const io = socket(server)

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  req.io = io
  return next()
})
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', '..', 'uploads', 'resized')),
)

routes(app)

module.exports = server
