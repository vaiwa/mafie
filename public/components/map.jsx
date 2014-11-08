/**
 * @jsx React.DOM
 */

var React = require('react')
var LeafletMap = require('../js/map.coffee')()
var geoJumper = require('../js/geoJumper')

var PRAHA = {coordinates: [50.051611, 14.407032], type:"Point"}
var BRNO = {coordinates: [49.19163, 16.61238], type:"Point"}
var ADS = [
	{ id: 1, location: {coordinates: [50.06516, 14.41738], type:"Point"}, radius: 1000},
	{ id: 2, location: {coordinates: [50.060622, 14.389032], type:"Point"}, radius: 500},
	{ id: 3, location: {coordinates: [50.05789, 14.43751], type:"Point"}, radius: 1000},
	{ id: 4, location: {coordinates: [50.04052, 14.36838], type:"Point"}, radius: 2000},
	{ id: 5, location: {coordinates: [49.19068, 16.65304], type:"Point"}, radius: 1000},
	{ id: 6, location: {coordinates: [49.2033, 16.57416], type:"Point"}, radius: 500}
];



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
		LeafletMap.init(this.getDOMNode())
		LeafletMap.setMyCoord(PRAHA.coordinates)
		LeafletMap.setAds(ADS)

		geoJumper(LeafletMap)
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
			<div id="map"></div>
		)
	}
})

module.exports = Map