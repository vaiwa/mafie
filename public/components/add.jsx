/**
 * @jsx React.DOM
 */

var React = require('react')
var addons = require('react/addons')
var _ = require ('../libs/lodash/dist/lodash');

var FilterLocation = require('./filterLocation.jsx')
var Map = require('./map.jsx')
var sports = _.clone(require('../shared/sports'));
var adsService = require('../js/ads');

sports.splice(0, 1);

var Add = React.createClass({

	getInitialState: function() {
		return {
			hasLocation: false
		}
	},

	handleMapClick: function(location) {
		console.log(location)
		this.setState({center: location, hasLocation: true})
	},
	handleMarkerClick: function(id) {
		console.log(id)
	},
	postNewAd: function(e) {
		var props = ['sport', 'date', 'mail'];
		var toSend = {};
		var refs = this.refs;

		if (!this.state.center) {
			//TODO handle validation here
			return;
		}

		props.forEach(function(prop) {
			toSend[prop] = refs[prop].getDOMNode().value;
			if (!toSend[prop]) {
				//TODO is required, handle validation here
				return;
			}
		});

		toSend.location = {
			type: 'Point',
			coordinates: _.values(this.state.center)
		};

		toSend.date = new Date(toSend.date);

		adsService.create(toSend)

		alert('Nápad na trénink vložen, držíme palce ať to vyjde!')
		location.href = '/'

	},

	render: function() {
		var classes = React.addons.classSet({
			'show-form-top': this.state.hasLocation
		})
		var title = this.state.hasLocation ? "Vyplň údaje o aktivitě" : "Vyber umístění aktivity na mapě"
		return (
			<div>
				<header className="site-header">
					<a href="#/" className="site-logo">Zahra<i>jeme</i></a>
				</header>

				<FilterLocation onChange={this.handleFilterLocationChange} />

				<Map pins={[]} onMapClick={this.handleMapClick} onMarkerClick={this.handleMarkerClick} />

				<div className={classes}>

						<div className="list_group__box--offer list-group">
							<div className="list-group-item">
								<h4 className="offer_title">{title}</h4>
								<div className="col__list col-xs-6 col-sm-6">
									<select ref="sport" className="form-control">
										{sports.map(function(sport) {
											return <option key={sport.id} value={sport.id}>{sport.title}</option>
										})}
									</select>
							</div>
							<div className="offer-primary-field"></div>
							<div className="col__list col-xs-6 col-sm-6">
								<input ref="date" className="form-control" type="date" placeholder="Termín" required />
							</div>
							<div className="clearfix"></div>
							<div className="offer-filed--divider"></div>
							<div className="col__list col-xs-6 col-sm-6">
								<input ref="mail" className="form-control" type="email" placeholder="E-mail" reqired/>
							</div>
							<div className="col__list col-xs-6 col-sm-6">
								<input className="form-control btn btn-primary" type="submit" value="Vložit" onClick={this.postNewAd}/>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>

				</div>

			</div>
		)
	}

})

module.exports = Add
