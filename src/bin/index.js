import http from 'http'
import mongoose from '../services/mongoose'
import express from '../services/express'
import api from '../api'

const app = express(api)

const server = http.createServer(app)

mongoose.connect('mongodb://localhost/demo', {
  useNewUrlParser: true
})
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(9000, 'localhost', () => {
    console.log('Express server listening on http://%s:%d', 'localhost', 9000)
  })
})

export default app
