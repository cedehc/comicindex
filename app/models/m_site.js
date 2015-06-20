/**
 * m_site.js
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var site = new Schema({
	name: String,
	url: String,
	license: {
		tp: String,
		inf: String
	},
	meta: {
		admin: {
			name: String,
			email: String
		},
		rev: Number
	},
	status: String,
	category: String
},{collection: 'site'} );

module.exports = mongoose.model('site', site);