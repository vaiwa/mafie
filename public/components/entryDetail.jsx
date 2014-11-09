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

		var classes = this.props.classes + ' list-group-item'
		var title = sports[this.props.entry.sport].title

		return (
			<div className={classes}>

				<h4 className="entry-title list-group-item-heading">
					<button onClick={this.handleClose} type="button" className="close"><span aria-hidden="true">&times;</span></button>
					{title}
				</h4>

				<div className="list-group-item-text">
					<p className="entry-info"><span className="glyphicon glyphicon-map-marker"></span> {this.props.entry.place}</p>
					<p className="entry-info"><span className="glyphicon glyphicon-calendar"></span> {this.props.entry.time}</p>

					<div className="entry-note input-group">
						<textarea rows="2" className="entry-note-text form-control" placeholder="Domluv se co a jak" />
						<span className="entry-note-btn input-group-btn">
							<button className="btn btn-primary" type="button">Odešli</button>
						</span>
					</div>
				</div>

			</div>
		)
	}
})

module.exports = EntryDetail