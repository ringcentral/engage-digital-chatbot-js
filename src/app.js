
import express from 'express'
import {handler, verify} from './handler'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get(['/', '/test'], (req, res) => {
  res.end('server running')
})
app.get('/favicon.ico', (req, res) => {
  res.end('')
})

app.get('/dimelo-demo-endpoint', verify)
app.post('/dimelo-demo-endpoint', handler)

export default app
