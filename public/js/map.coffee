L = require '../libs/leaflet/dist/leaflet'
icons = require('./map/icons.coffee') L

L.Icon.Default.imagePath = 'images'


module.exports = () ->

	coordMy = [50.051611, 14.407032]

	ads = [
		{location: [50.06516, 14.41738], radius: 1000, text: "Inzerat 1"}
		{location: [50.060622, 14.389032], radius: 500, text: "Inzerat 2"}
		{location: [50.05789, 14.43751], radius: 1000, text: "Inzerat 3"}
		{location: [50.04052, 14.36838], radius: 2000, text: "Inzerat 3"}
	]





	map = L.map('map').setView coordMy, 14



	layer = L.tileLayer 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
		maxZoom: 18
		id: 'examples.map-i875mjb7'
	layer.addTo map



	L.marker(coordMy, {icon: icons.red()})
	.addTo(map)
	.bindPopup("<b>Ahoj!</b><br />Tady je Techsquare.")
	.openPopup()


	displayAd = (ad, color = 'blue') ->
		marker = L.marker(ad.location, {icon: icons.color(color)}).bindPopup(ad.text)
		circle = L.circle ad.location, ad.radius,
			color: "light#{color}",
			fillColor: "light#{color}",
			fillOpacity: 0.5

		# circle.bindPopup "I am a circle."

		marker.addTo map
		circle.addTo map



	displayAd ad for ad in ads






	map.on 'click', (e) ->
		ad =
			location: e.latlng
			radius: 500
			text: 'Novy Ad'

		displayAd ad, 'green'








	# // var popup = L.popup();

	# // function onMapClick(e) {
	# // 	popup
	# // 		.setLatLng(e.latlng)
	# // 		.setContent("You clicked the map at " + e.latlng.toString())
	# // 		.openOn(map);
	# // }

	# // map.on('click', onMapClick);



