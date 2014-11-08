/**
 * @jsx React.DOM
 */

var React = require('react')

var App = React.createClass({

	render: function() {
		return (
			<div>
				<header>Header</header>
				<this.props.activeRouteHandler/>
			</div>
		)
	}

})

module.exports = App