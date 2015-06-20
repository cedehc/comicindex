var express = require('express');
var routerSearch = express.Router();

var m_site = require('../models/m_site');

routerSearch.
	get('/search', function(req, res) {
		var searchName = req.query.name;
		m_site.find({'name':new RegExp(searchName, "i")}, function(err, dataName) {
			if (err) {console.log(err);}
			console.log(dataName);
			res.send(dataName);
		});
	});

routerSearch.
	get('/search', function(req, res) {
		var url = req.query.url;
		console.log(url);
	});

routerSearch.
	get('/search', function(req, res) {
		var searchCategory = req.query.category;
		m_site.find({'category':new RegExp(searchCategory, "i")}, function(err, dataCategory) {
			if (err) {console.log(err);}
			console.log(dataCategory);
			res.send(dataCategory);
		});
	});

routerSearch.
	get('/search', function(req, res) {
		var searchLicense = req.query.license;
		m_site.find({'license.tp':new RegExp(searchLicense, "i")}, function(err, dataLicense) {
			if (err) {console.log(err);}
			console.log(dataLicense);
			res.send(dataLicense);
		});
	});

routerSearch.
	get('/search', function(req, res) {
		var searchStatus = req.query.status;
		m_site.find({'status':new RegExp(searchStatus, "i")}, function(err, dataStatus) {
			if (err) {console.log(err);}
			console.log(dataStatus);
			res.send(dataStatus);
		});
	});

module.exports = routerSearch;
