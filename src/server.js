const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

const webRouter = require('./routes/web')
// khai báo router
app.use('/', webRouter)

// config teamplate engine
const configViewEngine = require('./config/viewEnngine')
configViewEngine(app);


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})