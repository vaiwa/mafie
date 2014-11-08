L = require '../libs/leaflet/dist/leaflet'
icons = require('./map/icons.coffee') L

L.Icon.Default.imagePath = 'images'

defaultCoord = [50.051611, 14.407032] # Prague


module.exports = () ->
	map = L.map('map').setView defaultCoord, 14

	coordMy = defaultCoord
	coordFocus = coordMy

	ads = []


	init: ->
		layer = L.tileLayer 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
			maxZoom: 18
			id: 'examples.map-i875mjb7'
		.addTo map




		map.on 'click', (e) =>
			color = 'green'
			
			coordFocus = e.latlng
			ad =
				location: coordinates: coordFocus
				radius: 500
				text: 'Novy Ad'
			@displayAd ad, color

			markerFocus = L.marker(ad.location.coordinates, {icon: icons.color(color)}).bindPopup(ad.text)
			circleFocus = L.circle ad.location.coordinates, ad.radius,
				color: "light#{color}",
				fillColor: "light#{color}",
				fillOpacity: 0.5

			# circle.bindPopup "I am a circle."

			markerFocus.addTo map
			circleFocus.addTo map


		# // var popup = L.popup();

		# // function onMapClick(e) {
		# // 	popup
		# // 		.setLatLng(e.latlng)
		# // 		.setContent("You clicked the map at " + e.latlng.toString())
		# // 		.openOn(map);
		# // }

		# // map.on('click', onMapClick);


	displayMe: (coord) ->
		L.marker(coord, {icon: icons.red()})
		.addTo(map)
		.bindPopup("<b>Ahoj!</b><br />Tady je Techsquare.")
		.openPopup()


	displayAd: (ad, color = 'blue') ->
		marker = L.marker(ad.location.coordinates, {icon: icons.color(color)}).bindPopup(ad.text)
		circle = L.circle ad.location.coordinates, ad.radius,
			color: "light#{color}",
			fillColor: "light#{color}",
			fillOpacity: 0.5

		# circle.bindPopup "I am a circle."

		marker.addTo map
		circle.addTo map


	getMyCoord: () -> @coordMy

	setMyCoord: (coord) ->
		@coordMy = coord
		@coordFocus = coord

		map.setView coord, 14
		@displayMe coordMy


	setAds: (ads) ->
		@ads = ads
		@displayAd ad for ad in ads

	moveTo: (coord) ->
		@coordFocus = coord
		map.setView coord, 14





