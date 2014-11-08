/**
 * @jsx React.DOM
 */

var React = require('react')

var Entry = require('./entry.jsx')

var Listing = React.createClass({
	render: function() {
		return (
			<div>
				Listing:
				<Entry />
			</div>
		)
	}
})

module.exports = Listing