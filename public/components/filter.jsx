/**
 * @jsx React.DOM
 */

var React = require('react')

var sports = require('../shared/sportsEnum')

var Filter = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">

					<div className="col-xs-12 col-sm-12">
						<div className="input-group">
							<div className="input-group-btn">
								<select className="form-control radius--left">
									{sports.map(function(sport) {
										return <option key={sport.id} value={sport.id}>{sport.title}</option>
									})}
								</select>

							</div>
							<div className="input-group-btn">
								<input id="geoJumper" className="form-control radius--right" type="text" placeholder="Adresa"/>
							</div>
						</div>
					</div>


				</div>
			</div>
		)
	}
})

module.exports = Filter