/**
 * @jsx React.DOM
 */

var React = require('react')

var Filter = require('./filter.jsx')
var Map = require('./map.jsx')
var Listing = require('./listing.jsx')

var entries = [
	{ id: 1, name: 'Tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30'},
	{ id: 2, name: 'Tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30'},
	{ id: 3, name: 'Tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30'},
	{ id: 4, name: 'Tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30'},
	{ id: 5, name: 'Tenis', place: 'Thákurova 9, Praha 6', time: 'Pátek 16:30'}
]

var Dashboard = React.createClass({

	render: function() {
		return (
			<div>
				<Filter />
				<Map />
				<Listing entries={entries}/>
			</div>
		)
	}

})

module.exports = Dashboard