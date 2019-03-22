const express = require("express"),
    app = express(),
    config = require('./config');

app.set("view engine", "ejs");

let props = {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890"
};

app.use("/", function(request, response){
    response.render("contact", props);
});




app.listen(config.port,config.ip);
console.log(`*****Server running at ${config.ip}:${config.port}`);