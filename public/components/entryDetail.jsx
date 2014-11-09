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
	handleSubmit: function(e) {
		e.preventDefault()
		this.props.onSubmit(this.props.entry, this.refs.note.getDOMNode().value)
	},
	formatDate: function(date) {
		var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
		date = new Date(date);
		var curr_date = date.getDate();
		var curr_month = date.getMonth();
		var curr_year = date.getFullYear();

		return curr_date + ". " + months[curr_month]+ " " + curr_year;
	},

	formatPos: function(pos) {
		return pos[0] + ', ' + pos[1];
	},

	render: function() {
		if(!this.props.entry) return null

		var date = this.formatDate(this.props.entry.date);
		var pos = this.formatPos(this.props.entry.location.coordinates)
		var classes = this.props.classes + ' list-group-item'
		var title = sports[this.props.entry.sport].title

		return (
			<div className={classes}>

				<h4 className="entry-title list-group-item-heading">
					<button onClick={this.handleClose} type="button" className="close"><span aria-hidden="true">&times;</span></button>
					{title}
				</h4>

				<div className="list-group-item-text">
					<p className="entry-info"><span className="glyphicon glyphicon-map-marker"></span> {pos}</p>
					<p className="entry-info"><span className="glyphicon glyphicon-calendar"></span> {date}</p>
					<p className="entry-info"><span className="glyphicon glyphicon-mail"></span> {this.props.entry.mail}</p>

					<div className="entry-note input-group">
						<textarea ref="note" rows="2" className="entry-note-text form-control" placeholder="Domluv se co a jak a přidej svůj kontakt" />
						<span className="entry-note-btn input-group-btn">
							<button onClick={this.handleSubmit} className="btn btn-primary" type="button">Odešli</button>
						</span>
					</div>
				</div>

			</div>
		)
	}
})

module.exports = EntryDetail