var express = require('express');
var rootRoute = express.Router();
var path = require('path');

rootRoute.
	get('/', function(req, res) {

		var filePath = path.resolve(__dirname + '/../../public/index.html');

		res.sendFile(filePath);
	});

module.exports = rootRoute;