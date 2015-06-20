/**
 * index.js
 *
 * 
 */

var express = require('express');
var app = express();
var routeManager = require('./app/router/routeManager');
var site = require('./app/models/m_site');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/comic');

var port = 8080;
var ip = '0.0.0.0';

app.use(express.static(__dirname + '/public'));

routeManager(app);

insertData();

app.listen(port, ip);

function insertData () {
	var lol = new site({
	name: 'Willtirando',
	url: 'http://willtirando.com.br/',
	license: { 
		tp: 'Copyright',
		inf: 'Sem informacoes adicionais'
	},
	meta: {
		admin: {
			name: 'Will Leite',
			email: 'contato@willtirando.com.br'
		},
		rev: 1
	},
	status: 'online',
	category: 'Humor'
});

console.log(JSON.stringify(lol, null, 2));
	lol.save(function(err) {
		if (err) {console.error(err);}
		console.log(lol);
	});
}