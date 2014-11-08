var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adSchema = new mongoose.Schema({
	location: { 'type': {	//should be a reference really to a schema 'location', but not yet
		type: String, enum: ["Point"], default: "Point"},
		coordinates: { type: [Number],  default: [0,0]}
	},
	radius: { type: Number, default: 0},	//kilometers around the point
	creation_date: { type: Date, default: Date.now },
	date: { type: Date, default: Date.now },
	text: { type: String },
	sport: {type: String, enum: require('./../../public/shared/sportsEnum'), required: true},
	mail: { type: String, required: true },
	phone: { type: String }
});

adSchema.index({ location : '2dsphere' });

module.exports = adSchema;

