L = require '../libs/leaflet/dist/leaflet'
markers = require('./map/markers.coffee') L

L.Icon.Default.imagePath = 'images'

defaultCoord = [50.051611, 14.407032] # Prague


module.exports = () ->
	map = L.map('map').setView defaultCoord, 14


	coordMy = defaultCoord
	ads = []

	layer = L.tileLayer 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
		maxZoom: 18
		id: 'examples.map-i875mjb7'
	layer.addTo map


	map.on 'click', (e) ->
		ad =
			location: e.latlng
			radius: 500
			text: 'Novy Ad'
		markers.displayAd map, ad, 'green'


	# // var popup = L.popup();

	# // function onMapClick(e) {
	# // 	popup
	# // 		.setLatLng(e.latlng)
	# // 		.setContent("You clicked the map at " + e.latlng.toString())
	# // 		.openOn(map);
	# // }

	# // map.on('click', onMapClick);


	getMyCoord: () -> @coordMy

	setMyCoord: (coord) ->
		@coordMy = coord
		map.setView coord, 14
		markers.displayMe map, coordMy


	setAds: (ads) ->
		@ads = ads
		markers.displayAd map, ad for ad in ads

	moveTo: (coord) ->
		map.setView coord, 14












