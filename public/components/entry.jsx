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
			<a onClick={this.handleClick} className="entry list-group-item" href="#">
				<div className="col__list col-xs-12 col-sm-12">
					<h4 className="entry-title active__title pull-left">{title}</h4>
					<div className="entry-info pull-right">
						{this.props.entry.place} <span className="glyphicon glyphicon-map-marker"></span>
						<br/>
						{this.props.entry.time} <span className="glyphicon glyphicon-calendar"></span>
					</div>
				</div>
				<div className="clearfix"></div>
			</a>
		)
	}
})

module.exports = Entry