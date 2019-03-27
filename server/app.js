const express = require("express"),
    app = express(),
    config = require('./config'),
    path = require("path");


// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'../public'));
});

app.listen(config.port,config.ip);
console.log(`*****Server running at ${config.ip}:${config.port}`);




