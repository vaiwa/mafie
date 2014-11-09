_ = require '../../libs/lodash/dist/lodash'
sports =  require '../../shared/sports'

sports = _.indexBy sports, 'id' if _.isArray sports


module.exports = (L) ->

	res =
		type: (type = 'soccer') ->
			switch type
				when 'red' then @red()
				when 'green' then @green()
				else
					L.icon
						iconUrl: sports[type].iconUrl
						iconSize: [57, 43]
						iconAnchor: [20, 35]

		red: ->
			L.icon
				iconUrl: '../images/marker-icon-red.png'
				iconRetinaUrl: 'images/marker-icon-red-2x.png'
				iconSize: [25, 41]
				iconAnchor: [12, 41]
				shadowUrl: 'images/marker-shadow.png'
				shadowSize: [41, 41]
				shadowAnchor: [12, 41]

		green: ->
			L.icon
				iconUrl: '../images/marker-icon-green.png'
				iconRetinaUrl: 'images/marker-icon-green-2x.png'
				iconSize: [25, 41]
				iconAnchor: [12, 41]
				shadowUrl: 'images/marker-shadow.png'
				shadowSize: [41, 41]
				shadowAnchor: [12, 41]


	for id, sport of sports
		res[id] = ->
			iconUrl: sport.iconUrl
			iconSize: [57, 43]
			iconAnchor: [12, 41]

	res
