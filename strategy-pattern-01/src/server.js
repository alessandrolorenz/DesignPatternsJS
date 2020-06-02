const express = require('express')
const Controller01 = require('./controllers/controller01')

const app = express()

// app.use()

app.get('/shipping/:company', Controller01.getResult)

app.listen(3333)