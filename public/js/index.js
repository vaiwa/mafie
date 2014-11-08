var plugins = require('./plugins')
var React = require('react')

setTimeout(function() {
	map.setAds([]);
}, 2000);

var router = require('../components/router.jsx')
React.renderComponent(router, document.body);

