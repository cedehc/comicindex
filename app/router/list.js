var express = require('express');
var routerSearch = express.Router();

var m_site = require('../models/m_site');

routerSearch.
	get('/search/name:name', function(req, res) {
		var name = req.params.name;
		res.send(name);
	});


routerSearch.
	get('/search/url:url', function(req, res) {
		var url = req.params.url;
		res.send(url);
	});

routerSearch.
	get('/search/category:category', function(req, res) {
		var category = req.params.category;
		res.send(category);
	});

routerSearch.
	get('/search/license:license', function(req, res) {
		var license = req.params.license;
		res.send(license);
	});

routerSearch.
	get('/search/status:status', function(req, res) {
		var status = req.params.status;
		res.send(status);
	});

module.exports = routerSearch;
