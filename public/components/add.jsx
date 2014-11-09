/**
 * @jsx React.DOM
 */

var React = require('react')

var FilterLocation = require('./filterLocation.jsx')
var Map = require('./map.jsx')
var sports = require('../shared/sports');
sports.splice(0, 1);

var Add = React.createClass({

	handleMapClick: function(location) {
		console.log(location)
	},
	handleMarkerClick: function(id) {
		console.log(id)
	},

	render: function() {
		return (
			<div>
				<header className="site-header">
					<a href="#/" className="site-logo">Zahra<i>jeme</i></a>
				</header>

				<FilterLocation onChange={this.handleFilterLocationChange} />

				<Map pins={[]} onMapClick={this.handleMapClick} onMarkerClick={this.handleMarkerClick} />

				<div className="container">
					<div className="row">
						<div className="list_group__box--offer list-group">
							<div className="list-group-item">
								<h4 className="offer_title">Vyberte umístění aktivity na mapě</h4>
								<div className="col__list col-xs-6 col-sm-6">
									<select className="form-control">
										{sports.map(function(sport) {
											return <option key={sport.id} value={sport.id}>{sport.title}</option>
										})}
									</select>
								</div>
								<div className="offer-primary-field"></div>
								<div className="col__list col-xs-6 col-sm-6">
									<input className="form-control" type="text" placeholder="Datum"/>
								</div>
								<div className="clearfix"></div>
								<div className="offer-filed--divider"></div>
								<div className="col__list col-xs-6 col-sm-6">
									<input className="form-control" type="text" placeholder="Kontakt"/>
								</div>
								<div className="col__list col-xs-6 col-sm-6">
									<input className="form-control btn btn-primary" type="submit" value="Vložit"/>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}

})

module.exports = Add