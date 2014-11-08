var React = require('react')

// <Debug...
var map = require('./map.coffee')()

setTimeout(function(){
	map.moveTo([49.19163, 16.61238]);
}, 4000);

// ...>


var router = require('../components/router.jsx')
// React.renderComponent(router, document.body);
