const express = require('express'), app = express(),
      config = require('./config'), path = require('path'),
      incomingDB = require('./DB/incomingDB.json'),
      fs = require('fs'),
      fetch = require('node-fetch'),
      downloadImage = require('image-downloader');

// Serve static files
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
                 res.sendFile(path.join(__dirname + '../public/index.html'))})


app.listen(config.port)



d

console.log(`*****Server running at localhost ${config.port}`)
