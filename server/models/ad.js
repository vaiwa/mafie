var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
	location: { type: [Number], index: '2dsphere'},
	creation_date: { type: Date, default: Date.now },
	date: { type: Date, default: Date.now },
	text: { type: String },
	sport: {type: String, enum: require('./../../public/shared/sportsEnum')}
});