/**
 * @jsx React.DOM
 */

var React = require('react')

var Entry = React.createClass({
	render: function() {
		return (
			<div className="list-group-item">
				<div className="col__list col-xs-10 col-sm-10">
					<h4 className="active__title pull-left">{this.props.name}</h4>
					<div className="pull-left">
						<span className="glyphicon glyphicon-map-marker"></span> {this.props.place}
						<br/>
						<span className="glyphicon glyphicon-calendar"></span> {this.props.time}
					</div>
				</div>
				<div className="col__list col-xs-2 col-sm-2"><a href="#" className="btn__play">
					<span className="btn btn-success btn-sm pull-right btn__callbtn"><span className="glyphicon glyphicon-chevron-right"></span>
					</span></a></div>
				<div className="clearfix"></div>
			</div>
		)
	}
})

module.exports = Entry