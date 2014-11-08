

module.exports = (L) ->

	icons = require('./icons.coffee') L


	displayMe: (map, coord) ->
		L.marker(coord, {icon: icons.red()})
		.addTo(map)
		.bindPopup("<b>Ahoj!</b><br />Tady je Techsquare.")
		.openPopup()


	displayAd: (map, ad, color = 'blue') ->
		marker = L.marker(ad.location.coordinates, {icon: icons.color(color)}).bindPopup(ad.text)
		circle = L.circle ad.location.coordinates, ad.radius,
			color: "light#{color}",
			fillColor: "light#{color}",
			fillOpacity: 0.5

		# circle.bindPopup "I am a circle."

		marker.addTo map
		circle.addTo map

