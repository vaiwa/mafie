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

	# callbackHandlers
	onMapClick = null
	onMarkerClick = null

	ads = []


	init: (mapElement, enableGreenMark = false) ->
		map = L.map(mapElement).setView defaultCoord, 14

		layer = L.tileLayer 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
			maxZoom: 19
			id: 'examples.map-i875mjb7'
		.addTo map


		map.on 'click', (e) =>
			type = 'green'

			coordFocus = e.latlng
			onMapClick coordFocus

			if enableGreenMark
				unless markerFocus
					markerFocus = L.marker(coordFocus, {icon: icons.type(type)})
					markerFocus.on 'click', () ->
						map.panTo coordFocus
						onMarkerClick coordFocus
					markerFocus.addTo map
				else
					markerFocus.setLatLng coordFocus
					markerFocus.update



	onMapClick: (cb) -> onMapClick = cb
	onMarkerClick: (cb) -> onMarkerClick = cb

	displayMe: (coord) ->
		markerMe = L.marker(coord, {icon: icons.red()})
		.addTo(map)
		.on 'click', () ->
			map.panTo coord
			console.log 'Its Me =)'


	addAd: (ad) ->
		marker = L.marker(ad.location.coordinates, {icon: icons.type(ad.sport)})
		marker.addTo map
		marker.on 'click', () ->
			# map.panTo ad.location.coordinates
			onMarkerClick ad

		ad.marker = marker
		ads.push ad


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

	setAds: (ads) ->
		@clearAds()
		@addAds(ads)


	moveTo: (coord) ->
		@coordFocus = coord
		map.setView coord, 14






