var plugins = require('./plugins')
var map = require('./map.coffee')()

setTimeout(function(){
	map.moveTo([49.19163, 16.61238]);
}, 4000);