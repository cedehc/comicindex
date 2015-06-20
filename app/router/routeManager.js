/**
 * routeManager.js
 *
 * Manages the API's routes
 *
 */

var list = require('./list');

module.exports = function (app) {

	app.use('/api/v1', list);

};
