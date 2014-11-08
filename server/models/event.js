var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
	location: { type: Schema.Types.ObjectId, ref: 'location', required: true },
	creation_date: { type: Date, default: Date.now },
	date: { type: Date, default: Date.now },
	elapses: { type: Number, default: 60 },
	min_people: { type: Number, default: 60 },
	attendees: [{ type: Schema.Types.ObjectId, ref: 'user'}],
	reoccurs: {type: String, enum: ['daily', 'weekly', 'monthly', 'yearly', 'custom']},
	custom_reoccurence: { type: Number, min: 1 }
});