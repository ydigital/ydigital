var express = require("express");

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