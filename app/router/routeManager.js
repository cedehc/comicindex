/**
 * routeManager.js
 *
 * Manages the API's routes
 *
 */

var list = require('./list');
var site = require('./site');
var rootPage = require('./rootPage');

module.exports = function (app) {

	app.use(rootPage);
	app.use('/api/v1', list);
	app.use('/api/v1', site);

};
