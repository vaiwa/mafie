var baucis = require('baucis');
var swagger = require('baucis-swagger');

var express = require('express');
var mongoose = require('mongoose');
var config = require('./server/config/config_hackathon');

mongoose.connect(config.mongo);

var models = require('./server/models/models');

//db2.ads.ensureIndex({ gps: "2dsphere"});
mongoose.set('debug', true);

// Create the app and listen for API requests
var app = express();
app.use('/api', baucis());
app.use(express.static('public'));

app.listen(8060);

module.exports = app;