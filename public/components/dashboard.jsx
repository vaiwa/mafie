/**
 * @jsx React.DOM
 */

var React = require('react')

var Filter = require('./filter.jsx')
var Map = require('./map.jsx')
var Listing = require('./listing.jsx')

var ENTRIES = [
	{ id: 1, sport: 'tenis', name: 'Tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.06516, 14.41738], type:"Point"}, radius: 1000 },
	{ id: 2, sport: 'volleyball', name: 'Volejbal', place: 'Thákurova 9, Praha 6', time: 'Sobota dopoledne', location: {coordinates: [50.060622, 14.389032], type:"Point"}, radius: 500 },
	{ id: 3, sport: 'tenis', name: 'Tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.05789, 14.43751], type:"Point"}, radius: 1000 },
	{ id: 4, sport: 'badminton', name: 'Badminton', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.04052, 14.36838], type:"Point"}, radius: 2000 },
	{ id: 5, sport: 'tenis', name: 'Tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [49.19068, 16.65304], type:"Point"}, radius: 1000 }
]

var Dashboard = React.createClass({

	getInitialState: function() {
		return {
			entries: ENTRIES
		}
	},

	getAllEntries: function() {
		return ENTRIES
	},
	getEntriesBySport: function(sport) {
		if (sport == 'all') return this.getAllEntries()

		return this.getAllEntries().filter(function(itm) {
			return sport === 'all' || itm.sport === sport
		})
	},

	handleFilterSportChange: function(sport) {
		this.setState({ entries: this.getEntriesBySport(sport) })
	},
	handleMapClick: function(location) {
		console.log(location)
	},
	handleMarkerClick: function(id) {
		console.log(id)
	},

	render: function() {
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-static" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand" href="./">Zahrajeme.cz</a>
						</div>
					</div>
				</nav>

				<Filter onSportChange={this.handleFilterSportChange} />
				<Map pins={this.state.entries} onMapClick={this.handleMapClick} onMarkerClick={this.handleMarkerClick} />
				<Listing entries={this.state.entries} />
			</div>
		)
	}

})

module.exports = Dashboard