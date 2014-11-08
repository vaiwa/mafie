/**
 * @jsx React.DOM
 */

var React = require('react')

var App = React.createClass({

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

				<this.props.activeRouteHandler/>
			</div>
		)
	}

})

module.exports = App