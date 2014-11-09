/**
 * @jsx React.DOM
 */

var React = require('react')
var _ = require ('../libs/lodash/dist/lodash')
var sports = _.indexBy(require('../shared/sports'), 'id')

var EntryDetail = React.createClass({

	handleClose: function(e) {
		e.preventDefault()
		this.props.onClose()
	},

	render: function() {
		if(!this.props.entry) return null
		var title = sports[this.props.entry.sport].title

		return (
			<div className="list-group-item">
				<div className="col__list col-xs-10 col-sm-10">
					<h4 className="sport__title pull-left">{title}</h4>
					<div className="clearfix"></div>
					<ul className="list-unstyled sport__info">
						<li className="pull-left"><span className="glyphicon glyphicon-map-marker"></span> {this.props.entry.place}</li>
						<li className="pull-left"><span className="glyphicon glyphicon-calendar"></span> {this.props.entry.time}</li>
					</ul>
					<div className="clearfix"></div>
					<form role="form">
						<div className="form-group">
							<input type="text" className="form-control input__message" placeholder="Domluv se co a jak"/>
						</div>
					</form>
				</div>
				<div className="col__list col-xs-2 col-sm-2">
					<a onClick={this.handleClose} href="#" className="message--cancel">
						<span className="btn btn-sm pull-right btn__cross"><span className="glyphicon glyphicon-remove-sign"></span> </span>
					</a>
					<div className="clearfix"></div>
					<a href="#" className="message--send">
						<span className="btn btn-success btn-sm pull-right btn__send-message"><span className="glyphicon glyphicon-ok-circle"></span> </span>
					</a>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}
})

module.exports = EntryDetail