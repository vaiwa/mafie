var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
	name: { type: Schema.Types.ObjectId, ref: 'location', required: true },
	creation_date: { type: Date, default: Date.now },
	loc: { type: [Number], index: '2dsphere'},
	popularity: { type: Number, default: 0}	// should increase every time an event takes place at this loaction
});