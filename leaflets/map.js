

var coordMy = [50.051611, 14.407032];

ads = [
	{location: [50.052622, 14.419032], radius: 500, text: "Inzerat 1"},
	{location: [50.060622, 14.389032], radius: 1500, text: "Inzerat 2"},
	{location: [50.060622, 14.409032], radius: 1000, text: "Inzerat 3"}
];

var redIcon = L.icon({
	iconUrl: 'images/marker-icon-red.png',
	iconRetinaUrl: 'images/marker-icon-red-2x.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],

	popupAnchor: [1, -34],

	shadowUrl: 'images/marker-shadow.png',
	shadowSize: [41, 41],
	shadowAnchor: [12, 41]
});


var map = L.map('map').setView(coordMy, 14);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	// attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	// 	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	// 	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-i875mjb7'
}).addTo(map);

L.marker(coordMy, {icon: redIcon}).addTo(map).bindPopup("<b>Ahoj!</b><br />Tady je Techsquare.").openPopup();



createAd = function (ad) {
	L.marker(ad.location).addTo(map).bindPopup(ad.text);
	L.circle(ad.location, ad.radius, {
		color: 'lightblue',
		fillColor: 'lightblue',
		fillOpacity: 0.5
	}).addTo(map).bindPopup("I am a circle.");
}

ads.forEach(function(ad) { createAd(ad); });




map.on('click', function(e) {
	ad = {
	};
    alert(e.latlng); // e is an event object (MouseEvent in this case)
});





// L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047]
// ]).addTo(map).bindPopup("I am a polygon.");


// var popup = L.popup();

// function onMapClick(e) {
// 	popup
// 		.setLatLng(e.latlng)
// 		.setContent("You clicked the map at " + e.latlng.toString())
// 		.openOn(map);
// }

// map.on('click', onMapClick);