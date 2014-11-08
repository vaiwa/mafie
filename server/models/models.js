var mongoose = require('mongoose');

mongoose.model('user', require('./user'));
mongoose.model('event', require('./event'));
mongoose.model('ad', require('./ad'));
mongoose.model('location', require('./location'));