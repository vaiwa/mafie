var plugins = require('./plugins');
var map = require('./map.coffee')();

require('./geoJumper')(map);

var PRAHA = [50.051611, 14.407032]
var BRNO = [49.19163, 16.61238]
var ADS = [
	{location: [50.06516, 14.41738], radius: 1000, text: "Inzerat 1"},
	{location: [50.060622, 14.389032], radius: 500, text: "Inzerat 2"},
	{location: [50.05789, 14.43751], radius: 1000, text: "Inzerat 3"},
	{location: [50.04052, 14.36838], radius: 2000, text: "Inzerat 3"},
	{location: [49.19068, 16.65304], radius: 1000, text: "Brno 1"},
	{location: [49.2033, 16.57416], radius: 500, text: "Brno 2"}
];

map.setMyCoord(PRAHA);
map.setAds(ADS);

var router = require('../components/router.jsx')
// React.renderComponent(router, document.body);


