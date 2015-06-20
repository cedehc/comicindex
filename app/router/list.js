var express = require('express');
var routerSearch = express.Router();

var m_site = require('../models/m_site');

routerSearch.
	get('/search/name/:name', function(req, res) {
		var searchName = req.params.name;
		m_site.find({'name':new RegExp(searchName, "i")}, function(err, data) {
			if (err) {console.log(err);}
			console.log(data);
			res.send(data);
		});
	});

routerSearch.
	get('/search/url/:url', function(req, res) {
		var url = req.params.url;
		console.log(url);
	});

routerSearch.
	get('/search/category/:category', function(req, res) {
		var category = req.params.category;
		console.log(category);
		res.send(category);
	});

routerSearch.
	get('/search/license/:license', function(req, res) {
		var license = req.params.license;
		res.send(license);
	});

routerSearch.
	get('/search/status/:status', function(req, res) {
		var status = req.params.status;
		res.send(status);
	});

module.exports = routerSearch;
