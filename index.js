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
	var lol1 = new site({
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

	var lol2 = new site({
	name: 'XKCD',
	url: 'http://xkcd.com/',
	license: { 
		tp: 'Creative Commons',
		inf: 'Sem informacoes adicionais'
	},
	meta: {
		admin: {
			name: 'Xkcd Guy',
			email: 'contato@xkcd.com.br'
		},
		rev: 1
	},
	status: 'online',
	category: 'Humor'
});

	var lol3 = new site({
	name: 'Hackatoon',
	url: 'http://hacktoon.com/',
	license: { 
		tp: 'Creative Commons',
		inf: 'Sem informacoes adicionais'
	},
	meta: {
		admin: {
			name: 'Hackatoon Guy',
			email: 'contato@xkcd.com.br'
		},
		rev: 1
	},
	status: 'online',
	category: 'Humor'
});

	var lol4 = new site({
	name: 'Dilbert',
	url: 'http://dilbert.com.br/',
	license: { 
		tp: 'Copyright',
		inf: 'Sem informacoes adicionais'
	},
	meta: {
		admin: {
			name: 'Berg Run',
			email: 'contato@dilbert.com.br'
		},
		rev: 1
	},
	status: 'online',
	category: 'Humor'
});

	var lol5 = new site({
	name: 'PHD Comics',
	url: 'http://phdcomics.com.br/',
	license: { 
		tp: 'Copyright',
		inf: 'Sem informacoes adicionais'
	},
	meta: {
		admin: {
			name: 'Phd Sheldon Cooper',
			email: 'contato@tbbt.com.br'
		},
		rev: 1
	},
	status: 'online',
	category: 'Humor'
});

	var lol6 = new site({
	name: 'Abstrusegoose',
	url: 'http://abstrusegoose.com/',
	license: { 
		tp: 'Creative Commons',
		inf: 'Sem informacoes adicionais'
	},
	meta: {
		admin: {
			name: 'Nomesquisito Guy',
			email: 'contato@pqp.com.br'
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