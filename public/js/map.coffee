L = require '../libs/leaflet/dist/leaflet'
icons = require('./map/icons.coffee') L

L.Icon.Default.imagePath = 'images'

defaultCoord = [50.051611, 14.407032] # Prague


module.exports = () ->

	map = null

	coordMy = defaultCoord
	coordFocus = coordMy

	markerFocus = null
	circleFocus = null

	ads = []


	init: (mapElement) ->
		map = L.map(mapElement).setView defaultCoord, 14

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

			unless markerFocus
				markerFocus = L.marker(ad.location.coordinates, {icon: icons.color(color)})
				markerFocus.bindPopup(ad.text)
				markerFocus.addTo map
			else
				markerFocus.setLatLng coordFocus
				markerFocus.update

			unless circleFocus
				circleFocus = L.circle ad.location.coordinates, ad.radius,
					color: "light#{color}",
					fillColor: "light#{color}",
					fillOpacity: 0.5
				circleFocus.addTo map
			else
				circleFocus.setLatLng coordFocus
				circleFocus.update



	displayMe: (coord) ->
		markerMe = L.marker(coord, {icon: icons.red()})
		.on 'click', () ->
			console.log 'TODO'
		.addTo(map)




	addAd: (ad, color = 'blue') ->
		marker = L.marker(ad.location.coordinates, {icon: icons.color(color)})
		circle = L.circle ad.location.coordinates, ad.radius,
			color: "light#{color}",
			fillColor: "light#{color}",
			fillOpacity: 0.5

		marker.on 'click', () ->
			console.log 'FANTOMAS'
		marker.on 'mouseover', () ->
			circle.addTo map
		marker.on 'mouseout', () ->
			map.removeLayer circle

		marker.addTo map
		ads.push {marker, circle}


	getMyCoord: () -> @coordMy

	setMyCoord: (coord) ->
		@coordMy = coord
		@coordFocus = coord

		map.setView coord, 14
		@displayMe coordMy


	addAds: (ads) ->
		@ads = ads
		@addAd ad for ad in ads

	clearAds: () ->
		for ad in ads
			map.removeLayer ad.marker
			map.removeLayer ad.circle

	setAds: (ads) ->
		@clearAds()
		@addAds(ads)


	moveTo: (coord) ->
		@coordFocus = coord
		map.setView coord, 14





