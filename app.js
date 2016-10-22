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

var reservations=[{
    customerName: "Gael Arrambide",
    phoneNumber:"9566154895",
    customerEmail: "gael_arrambide.com",
    customerID: "777"
  },
  {
    customerName: "Carlos Lopez",
    phoneNumber:"55525552",
    customerEmail: "clo2go@gmail.com",
    customerID: "512"
    },
];

//route to home page
app.get('/home?', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

//route to tables page
app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

//route to reserve
app.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/:reservations?', function (req, res) {
	var chosen = req.params.characters;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < reservations.length; i++) {
			if (chosen === reservations[i].routeName) {
				res.json(reservations[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(reservations);
	}
});

// Create New Characters - takes in JSON input
app.post('/api/new', function (req, res) {
	var newReservation = req.body;
	newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();

	console.log(newReservation);

	reservations.push(newReservation);

	res.json(newReservation);
});

//Starts the server to begin listening
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
