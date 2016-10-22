//dependencies
var express=require('express');
var bodyParser = require('body-parser');
var path = require('path');

//setting express app
var app=express();
var PORT=3000;

//setting the express app to handle date parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//route to home page
/*app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});*/
app.get('/', function (req, res) {
	res.send('Welcome to Hot Restaurant!');
});

//Starts the server to begin listening
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
