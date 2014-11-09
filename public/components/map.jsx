/**
 * @jsx React.DOM
 */

var React = require('react')
var LeafletMap = require('../js/map.coffee')()
var geoJumper = require('../js/geoJumper')

var PRAHA = {coordinates: [50.051611, 14.407032], type:"Point"}
var BRNO = {coordinates: [49.19163, 16.61238], type:"Point"}


var Map = React.createClass({

	getInitialState: function() {
		var that = this

		LeafletMap.onMapClick(function(location) {
			that.props.onMapClick(location)
		})
		LeafletMap.onMarkerClick(function(id) {
			that.props.onMarkerClick(id)
		})

		return null
	},

	componentDidMount: function() {
		enableGreenMark = true
		LeafletMap.init(this.getDOMNode(), enableGreenMark)
		LeafletMap.setMyCoord(PRAHA.coordinates)
		LeafletMap.setAds(this.props.pins)

		geoJumper(LeafletMap)
	},

	componentDidUpdate: function() {
		LeafletMap.setAds(this.props.pins)
		if (this.props.center) {
			LeafletMap.moveTo(this.props.center)
		}
	},

	geolocate: function(callback) {
		if("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(callback, function() {}, {
				enableHighAccuracy: true, timeout: 15000, maximumAge: 600000
			})
		}
	},

	render: function() {
		return (
			<div className="map"></div>
		)
	}
})

module.exports = Map

