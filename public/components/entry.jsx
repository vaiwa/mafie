/**
 * @jsx React.DOM
 */

var React = require('react')
var _ = require ('../libs/lodash/dist/lodash')
var sports = _.indexBy(require('../shared/sports'), 'id')

var Entry = React.createClass({
	handleClick: function(e) {
		e.preventDefault()
		this.props.onClick(this.props.entry)
	},
	render: function() {
		var title = sports[this.props.entry.sport].title

		return (
			<div onClick={this.handleClick} className="list-group-item">
				<div className="col__list col-xs-12 col-sm-12">
					<h4 className="active__title pull-left">{title}</h4>
					<div className="pull-left">
						<span className="glyphicon glyphicon-map-marker"></span> {this.props.entry.place}
						<br/>
						<span className="glyphicon glyphicon-calendar"></span> {this.props.entry.time}
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}
})

module.exports = Entry