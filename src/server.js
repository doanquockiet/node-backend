const express = require('express')
require('dotenv').config();


const path = require('path')
const app = express()
const port = process.env.PORT || 8888;
console.log('cehcek env ', port);

const hostname = process.env.HOST_NAME
// config teamplate engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// config static file
app.use(express.static(path.join(__dirname, 'public')))
// khai báo router
app.get('/', (req, res) => {
  res.send('Hello World! with doan quoc kiet')
})

app.get('/abc', (req, res) => {
    res.render('example.ejs')
  })

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})