var plugins = require('./plugins');
var map = require('./map.coffee')();

var geocoder = new google.maps.Geocoder();

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


setTimeout(function(){
	// map.moveTo(BRNO); // example - uncoment for move to BRNO
}, 4000);


var router = require('../components/router.jsx')
// React.renderComponent(router, document.body);


var addrInputEl = document.getElementById('geoJumper');

addrInputEl.addEventListener('keydown', function codeAddress(ev) {
		if (ev.keyCode === 13) {
			var address = document.getElementById('geoJumper').value;
			geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var loc = results[0].geometry.location;
					map.moveTo([loc.lat(), loc.lng()]);
					console.log("success");
				} else {
					alert('Geocode was not successful for the following reason: ' + status);
				}
			});
		}

	}
);