var express = require("express");
var logger = require('morgan');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(PORT, function(){
	console.log("SERVER RUNNING ON " + PORT);
});

app.get('/service', function (req, res) {
  res.sendFile(__dirname + '/public/service.html');
})

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/public/contact.html');
})

app.get('/career', function (req, res) {
	res.sendFile(__dirname + '/public/career.html');
})

app.use((req, res, next) => {
	res.status(404);
	res.sendFile(__dirname + '/public/404.html');
})

module.exports = app;