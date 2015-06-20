/**
 * routeManager.js
 *
 * Manages the API's routes
 *
 */

var site = require('./site');

module.exports = function (app) {

	app.use('/api/v1', site);

};