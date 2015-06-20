var express = require('express');
var siteRoutes = express.Router();

siteRoutes.
	get('/site/:site', function(req, res) {
		res.send('site');
	});

siteRoutes.
	post('/site', function(req, res) {
		res.send('post');
	});

module.exports = siteRoutes;