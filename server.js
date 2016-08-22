//modules=================================
var express = require('express'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose'),
 path = require('path');
 app = express(),
 root = __dirname,
 mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
//load mongoose before routes
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
//=========================
//listen to the port
//=========================conect to server
app.listen('8000', function() {});
