var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adSchema = new mongoose.Schema({
	location: { 'type': {
		type: String, enum: ["Point"], default: "Point"},
		coordinates: { type: [Number],  default: [0,0]}
	},
	area: { type: Number, default: 0},	//kilometers around the point
	creation_date: { type: Date, default: Date.now },
	date: { type: Date, default: Date.now },
	text: { type: String },
	sport: {type: String, enum: require('./../../public/shared/sportsEnum')}
});

adSchema.index({ location : '2dsphere' });

module.exports = adSchema;

