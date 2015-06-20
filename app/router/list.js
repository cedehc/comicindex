var express = require('express');
var routerSearch = express.Router();

var m_site = require('../models/m_site');

routerSearch.
	get('/search/name/:name', function(req, res) {
		var searchName = req.params.name;
		m_site.find({'name':new RegExp(searchName, "i")}, function(err, dataName) {
			if (err) {console.log(err);}
			console.log(dataName);
			res.send(dataName);
		});
	});

routerSearch.
	get('/search/url/:url', function(req, res) {
		var url = req.params.url;
		console.log(url);
	});

routerSearch.
	get('/search/category/:category', function(req, res) {
		var searchCategory = req.params.category;
		m_site.find({'category':new RegExp(searchCategory, "i")}, function(err, dataCategory) {
			if (err) {console.log(err);}
			console.log(dataCategory);
			res.send(dataCategory);
		});
	});

routerSearch.
	get('/search/license/:license', function(req, res) {
		var searchLicense = req.params.license;
		m_site.find({'license.tp':new RegExp(searchLicense, "i")}, function(err, dataLicense) {
			if (err) {console.log(err);}
			console.log(dataLicense);
			res.send(dataLicense);
		});
	});

routerSearch.
	get('/search/status/:status', function(req, res) {
		var searchStatus = req.params.status;
		m_site.find({'status':new RegExp(searchStatus, "i")}, function(err, dataStatus) {
			if (err) {console.log(err);}
			console.log(dataStatus);
			res.send(dataStatus);
		});
	});

module.exports = routerSearch;
