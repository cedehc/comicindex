var express = require('express');
var app = express();
var mongoose = require('mongoose');

var port = 8080;
var ip = '0.0.0.0'; // MUITO IMPORTANTE

app.listen(port, ip);