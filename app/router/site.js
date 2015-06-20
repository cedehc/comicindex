var express = require('express');
var routerSearch = express.Router();

var m_site = require('../models/m_site');

routerSearch.
	get('/search/name:name', function(req, res) {
		var name = req.params.name;
		res.send(name);
	});

module.exports = routerSearch;
