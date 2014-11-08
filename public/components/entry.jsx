/**
 * @jsx React.DOM
 */

var React = require('react')

var Entry = React.createClass({
	render: function() {
		return (
			<div className="list-group-item">
				<div className="col__list col-xs-12 col-sm-12">
					<h4 className="active__title pull-left">{this.props.name}</h4>
					<div className="pull-left">
						<span className="glyphicon glyphicon-map-marker"></span> {this.props.place}
						<br/>
						<span className="glyphicon glyphicon-calendar"></span> {this.props.time}
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}
})

module.exports = Entry