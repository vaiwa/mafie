var baucis = require('baucis');
var swagger = require('baucis-swagger');

var express = require('express');
var mongoose = require('mongoose');
var config = require('./server/config/config_dev');

mongoose.connect(config.mongo);

mongoose.model('user', require('./server/models/user'));
mongoose.model('event', require('./server/models/event'));
mongoose.model('ad', require('./server/models/ad'));

baucis.rest('user');
baucis.rest('event');
baucis.rest('ad');
// Create the app and listen for API requests
var app = express();
app.use('/api', baucis());

app.listen(8060);