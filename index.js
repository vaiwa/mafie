var baucis = require('baucis');
var swagger = require('baucis-swagger');

var express = require('express');
var mongoose = require('mongoose');
var config = require('./server/config/config_hackathon');

mongoose.connect(config.mongo);

require('./server/models/models');

baucis.rest('user');
baucis.rest('event');
baucis.rest('ad');
// Create the app and listen for API requests
var app = express();
app.use('/api', baucis());
app.use(express.static('public'));

app.listen(8060);