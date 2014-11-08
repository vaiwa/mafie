var React = require('react')

var plugins = require('./plugins');

// <Debug...
var map = require('./map.coffee')();

require('./geoJumper')(map);

var PRAHA = {coordinates: [50.051611, 14.407032], type:"Point"}
var BRNO = {coordinates: [49.19163, 16.61238], type:"Point"}
var ADS = [
	{location: {coordinates: [50.06516, 14.41738], type:"Point"}, radius: 1000, text: "Inzerat 1"},
	{location: {coordinates: [50.060622, 14.389032], type:"Point"}, radius: 500, text: "Inzerat 2"},
	{location: {coordinates: [50.05789, 14.43751], type:"Point"}, radius: 1000, text: "Inzerat 3"},
	{location: {coordinates: [50.04052, 14.36838], type:"Point"}, radius: 2000, text: "Inzerat 3"},
	{location: {coordinates: [49.19068, 16.65304], type:"Point"}, radius: 1000, text: "Brno 1"},
	{location: {coordinates: [49.2033, 16.57416], type:"Point"}, radius: 500, text: "Brno 2"}
];

map.setMyCoord(PRAHA.coordinates);
map.setAds(ADS);

setTimeout(function(){
	map.moveTo([49.19163, 16.61238]);
}, 4000);

// ...>


var router = require('../components/router.jsx')
// React.renderComponent(router, document.body);
