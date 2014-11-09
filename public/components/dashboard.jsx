/**
 * @jsx React.DOM
 */

var React = require('react')

var FilterSport = require('./filterSport.jsx')
var FilterLocation = require('./filterLocation.jsx')
var Map = require('./map.jsx')
var Listing = require('./listing.jsx')

var sports = require('../shared/sports')
var ads = require('../js/ads')


var PRAHA = {coordinates: [50.051611, 14.407032], type:"Point"}

var ENTRIES = [
	// { id: 1, sport: 'tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.06516, 14.41738], type:"Point"} },
	// { id: 2, sport: 'soccer', place: 'Thákurova 9, Praha 6', time: 'Sobota dopoledne', location: {coordinates: [50.060622, 14.389032], type:"Point"} },
	// { id: 3, sport: 'tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.05789, 14.43751], type:"Point"} },
	// { id: 4, sport: 'darts', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.04052, 14.36838], type:"Point"} },
	// { id: 5, sport: 'tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [49.19068, 16.65304], type:"Point"} },
	// { id: 11, sport: 'golf', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.06526, 14.42738], type:"Point"} },
	// { id: 12, sport: 'golf', place: 'Thákurova 9, Praha 6', time: 'Sobota dopoledne', location: {coordinates: [50.060632, 14.399032], type:"Point"} },
	// { id: 13, sport: 'all', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.05799, 14.44751], type:"Point"} },
	// { id: 14, sport: 'basketball', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.04062, 14.35838], type:"Point"} },
	// { id: 15, sport: 'basketball', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [49.19078, 16.64304], type:"Point"} },
	// { id: 21, sport: 'tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.04516, 14.41738], type:"Point"} },
	// { id: 22, sport: 'soccer', place: 'Thákurova 9, Praha 6', time: 'Sobota dopoledne', location: {coordinates: [50.040622, 14.389032], type:"Point"} },
	// { id: 23, sport: 'cycling', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.03789, 14.43751], type:"Point"} },
	// { id: 24, sport: 'cycling', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.02052, 14.36838], type:"Point"} },
	// { id: 25, sport: 'table-tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [49.17068, 16.65304], type:"Point"} },
	// { id: 211, sport: 'table-tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.04526, 14.42738], type:"Point"} },
	// { id: 212, sport: 'chess', place: 'Thákurova 9, Praha 6', time: 'Sobota dopoledne', location: {coordinates: [50.040632, 14.399032], type:"Point"} },
	// { id: 213, sport: 'chess', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.03799, 14.44751], type:"Point"} },
	// { id: 214, sport: 'darts', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [50.02062, 14.35838], type:"Point"} },
	// { id: 215, sport: 'basketball', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30', location: {coordinates: [49.17078, 16.64304], type:"Point"} }
]

var Dashboard = React.createClass({

	getInitialState: function() {
		return {
			entries: ENTRIES,
			filterSport: 'all',
			showList: false,
			activeEntry: false,
			center: false
		}
		ads.getNear(PRAHA.coordinates, 10000000).then(function(entries) {
			console.log("ENTRIES FROM MONGO", entries);
			this.setState({entries: entries})
		})
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

	handleLogoClick: function(e) {
		e.preventDefault()
		this.replaceState(this.getInitialState())
	},

	handleFilterSportChange: function(sport) {
		this.setState({
			filterSport: sport,
			entries: this.getEntriesBySport(sport)
		})
	},
	handleFilterLocationChange: function(location) {
		console.log(location)
	},

	handleOverbarClick: function(e) {
		e.preventDefault()
		this.setState({ showList: true })
	},

	handleLocationJump: function(e) {

	},

	handleEntryClick: function(e) {
		this.setState({ activeEntry: e, center: e.location.coordinates })
		scroll(0,0)
	},
	handleDetailClose: function() {
		this.setState({ activeEntry: false})
	},
	handleDetailSubmit: function(entry, note) {
		console.log('Submited detail: ', entry, note)
		// @TODO
		this.setState({
			activeEntry: false,
			showList: false
		})
		alert('Vzkaz byl odeslán, držíme palce ať to vyjde!')
	},
	handleMapClick: function(location) {
		console.log(location)
	},
	handleMarkerClick: function(e) {
		this.setState({ activeEntry: e, center: e.location.coordinates  })
	},

	render: function() {
		return (
			<div>
				<header className="site-header">
					<a onClick={this.handleLogoClick} href="#/" className="site-logo">Zahra<i>jeme</i></a>
					<FilterSport value={this.state.filterSport} onChange={this.handleFilterSportChange} />
				</header>

				<FilterLocation onChange={this.handleFilterLocationChange} handleLocationJump={this.handleFilterLocationChange} />

				<Map center={this.state.center} pins={this.state.entries} onMapClick={this.handleMapClick} onMarkerClick={this.handleMarkerClick} />

				<Listing
					entries={this.state.entries} activeEntry={this.state.activeEntry}
					showList={this.state.showList} sport={this.state.filterSport}
					onOverbarClick={this.handleOverbarClick} onEntryClick={this.handleEntryClick}
					onDetailClose={this.handleDetailClose} onDetailSubmit={this.handleDetailSubmit}
				/>
			</div>
		)
	}

})

module.exports = Dashboard