const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
//test connection
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
})

// simple test query

connection.query(
  'SELECT * FROM Users u ',
  function (err, result, fields){
    console.log("check result = ", result);
    console.log('fielsd =>>>>>',fields);
    
  }
)

const webRouter = require('./routes/web')
// khai báo router
app.use('/', webRouter)

// config teamplate engine
const configViewEngine = require('./config/viewEnngine')
configViewEngine(app);



app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})