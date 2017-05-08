var express = require("express");
// var logger = require('morgan');

var app = express();
// app.use(logger('dev'));

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

app.get('/memahami-digital-marketing-dengan-mudah', function(req, res) {
	res.sendFile(__dirname + '/public/news-detail.html');
})

app.get('/team', function(req, res){
	res.sendFile(__dirname + '/public/team.html');
})

app.get('/technology', function(req, res){
	res.sendFile(__dirname + '/public/technology.html');
})

app.get('/marketing', function(req, res){
	res.sendFile(__dirname + '/public/marketing.html');
})

app.get('/strategy', function(req, res){
	res.sendFile(__dirname + '/public/strategy.html');
})

app.get('/thank-you', function(req, res){
	res.sendFile(__dirname + '/public/thankyou.html');
})

app.get('/insight', function(req, res){
	res.sendFile(__dirname + '/public/insight.html');
})

app.get('/client-case', function(req, res){
	res.sendFile(__dirname + '/public/client-case.html');
})

app.get('/client-detail', function(req, res){
	res.sendFile(__dirname + '/public/client-detail.html');
})

app.get('/about', function(req, res){
	res.sendFile(__dirname + '/public/about.html');
})

app.use((req, res, next) => {
	res.status(404);
	res.sendFile(__dirname + '/public/404.html');
})

app.use((req, res, next) => {
	res.status(500);
	res.sendFile(__dirname + '/public/500.html');
})