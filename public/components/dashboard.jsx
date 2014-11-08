/**
 * @jsx React.DOM
 */

var React = require('react')

var Filter = require('./filter.jsx')
var Map = require('./map.jsx')
var Listing = require('./listing.jsx')

var Dashboard = React.createClass({

	render: function() {
		return (
			<div>
				Dashboard:
				<Filter />
				<Map />
				<Listing />
			</div>
		)
	}

})

module.exports = Dashboard