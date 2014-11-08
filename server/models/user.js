var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
	online: { type: Boolean, default: true},
	fb: {
		id: {type: String, required: true},
		first_name: {type: String, required: true},
		last_name: {type: String, required: true},
		gender: {type: String, required: true},
		username: {type: String, required: true},   //FB username for constructing FB links and for fetching the user
		verified: {type: Boolean, required: true},
		birthday: {type: String, permissions:{R: 30, W: 50}},
		email: {type: String, required: true},
		location: {id: String, name: String},
		hometown: {id: String, name: String}
	},
	creation_date: { type: Date, default: Date.now },
	access_token: { type: String, permissions:{R:50, W:50}},
	settings: {
		fb_publish: {type:Boolean, default:true},
		page_limit: {type: Number, min: 1, max: 300}
	},
	looking_for: [{type: String, enum: require('./../../public/shared/sportsEnum')}]
});