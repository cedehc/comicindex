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
		type: String,
		info: String
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
});