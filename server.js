const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Starting app
const app = express()
app.use(express.json())
app.use(cors())

// Starting database
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useUnifiedTopology: true, useNewUrlParser: true }
)

requireDir('./src/models')

// routes
app.use('/api', require('./src/routes'))

app.listen(3100)