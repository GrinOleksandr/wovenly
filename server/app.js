const express = require('express'),
  app = express(),
  config = require('./config'),
  path = require('path'),
  db = require('./DB/db.json')

// Serve static files
app.use(express.static(path.join(process.env.PWD, '/public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(process.env.PWD + '/public/index.html'))
})

app.listen(config.port, config.ip)
console.log(path.join(process.env.PWD + '/public'))
console.log(process.env.PWD)
console.log(process.cwd())
console.log(`*****Server running at localhost ${config.port}`)
