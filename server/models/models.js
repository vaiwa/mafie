var mongoose = require('mongoose');
var baucis = require('baucis');

var models = ['user', 'event', 'ad', 'location'];
var modelExport = {};
models.forEach(function (model){
	modelExport[model] = mongoose.model(model, require('./' + model));
	baucis.rest(model);
});

module.exports = modelExport;