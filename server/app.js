const express = require('express'), app = express(),
      config = require('./config'), path = require('path');


// Serve static files
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
                 res.sendFile(path.join(__dirname + '../public/index.html'))})


app.listen(config.port)


console.log(`*****Server running at localhost ${config.port}`)
