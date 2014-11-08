/**
 * @jsx React.DOM
 */

var React = require('react')

var Entry = require('./entry.jsx')

var Listing = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="list_group__box list-group">

						<div className="list-group-item">
							<div className="col__list col-xs-10 col-sm-10">
								<h4 className="active__title pull-left">Tenis</h4>
								<div className="pull-left">
									<span className="glyphicon glyphicon-map-marker"></span> Thakurova 9, Praha 6
									<br/>
									<span className="glyphicon glyphicon-calendar"></span> Pátek 16:30
								</div>
							</div>
							<div className="col__list col-xs-2 col-sm-2"><a href="#" className="btn__play">
								<span className="btn btn-success btn-sm pull-right btn__callbtn"><span className="glyphicon glyphicon-chevron-right"></span>
								</span></a></div>
							<div className="clearfix"></div>
						</div>

						<div className="list-group-item">
							<div className="col__list col-xs-10 col-sm-10">
								<h4 className="active__title pull-left">Badminton</h4>
								<div className="pull-left">
									<span className="glyphicon glyphicon-map-marker"></span> Thakurova 9, Praha 6
									<br/>
									<span className="glyphicon glyphicon-calendar"></span> Pátek 16:30
								</div>
							</div>
							<div className="col__list col-xs-2 col-sm-2"><a href="#" className="btn__play">
								<span className="btn btn-success btn-sm pull-right btn__callbtn"><span className="glyphicon glyphicon-chevron-right"></span>
								</span></a></div>
							<div className="clearfix"></div>
						</div>

						<div className="list-group-item">
							<div className="col__list col-xs-10 col-sm-10">
								<h4 className="active__title pull-left">Osadnici z katanu</h4>
								<div className="pull-left">
									<span className="glyphicon glyphicon-map-marker"></span> Thakurova 9, Praha 6
									<br/>
									<span className="glyphicon glyphicon-calendar"></span> Pátek 16:30
								</div>
							</div>
							<div className="col__list col-xs-2 col-sm-2"><a href="#" className="btn__play">
								<span className="btn btn-success btn-sm pull-right btn__callbtn"><span className="glyphicon glyphicon-chevron-right"></span>
								</span></a></div>
							<div className="clearfix"></div>
						</div>

					</div>
				</div>
			</div>
		)
	}
})

module.exports = Listing