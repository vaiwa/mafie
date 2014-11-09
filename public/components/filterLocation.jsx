/**
 * @jsx React.DOM
 */

var React = require('react')

var FilterLocation = React.createClass({
	render: function() {
		return (
			<div className="filterLocation">

				<div className="input-group input-group-sm">
					<input id="geoJumper" className="form-control" type="text" placeholder="Ukaž nápady na tréninky poblíž adresy"/>

					<span className="input-group-btn">
						<button className="btn btn-default" type="button"><i className="glyphicon glyphicon-search"></i></button>
					</span>
				</div>

			</div>
		)
	}
})

module.exports = FilterLocation