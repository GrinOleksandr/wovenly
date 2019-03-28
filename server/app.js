const express = require('express'),
  app = express(),
  config = require('./config'),
  path = require('path'),
  db = require('./DB/db.json')

// Serve static files
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './public'))
})

app.listen(config.port, config.ip)
console.log(path.join(__dirname + './../public'))
console.log(`*****Server running at localhost ${config.port}`)
