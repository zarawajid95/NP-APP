/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const cors = require('cors')
const fs = require('fs');
const fetch = require('node-fetch');
var https = require('https');
var privateKey  = fs.readFileSync('src/key.pem', 'utf8');
var certificate = fs.readFileSync('src/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(
  {
    // origin: 'http://54.245.47.192:3001',
    origin: 'http://localhost:3002',
    credentials: true
  }
))// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cookie())

app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const userRoutes = require('./routes/userRoutes')
const weatherRoutes = require('./routes/weatherRoutes')
const tripRoutes = require('./routes/tripRoutes')

// using as middleware
app.use('/api/v1', userRoutes)
app.use('/api/v1', weatherRoutes)
app.use('/api/v1', tripRoutes)

var server = https.createServer(credentials, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});

