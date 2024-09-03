const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require('./config/database');
const webRouter = require('./routes/web');
const configViewEngine = require('./config/viewEnngine');

// Configure the view engine
configViewEngine(app);

// Configure middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes after middleware
app.use('/', webRouter);

// Simple test query
connection.query('SELECT * FROM Users u', function (err, result, fields) {
  // console.log('check result = ', result);
  // console.log('fields =>>>>>', fields);
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
