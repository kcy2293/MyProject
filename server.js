/******************************
 * DECLARE MODULES
 ******************************/
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');

/******************************
 * SETUP EXPRESS & ROUTE
 ******************************/
var app = express();
app.disable('x-powered-by');
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

app.all('/*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');

	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "/views/index.html"));
});

/******************************
 * START SERVER
 ******************************/
var server = app.listen(5000);
