/**
 * index.js
 *
 * 
 */

var express = require('express');
var app = express();
var routeManager = require('./app/router/routeManager');

var port = 8080;
var ip = '0.0.0.0';

routeManager(app);

app.listen(port, ip);