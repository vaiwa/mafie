/**
 * @jsx React.DOM
 */

var React = require('react')
var addons = require('react/addons')

var Entry = require('./entry.jsx')
var EntryDetail = require('./entryDetail.jsx')

var Listing = React.createClass({

	getInitialState: function() {
		return {
			showList: false
		}
	},

	handleOverbarClick: function(e) {
		e.preventDefault()
		this.setState({ showList: true })
	},

	render: function() {
		var entryClickHandler = this.props.onEntryClick

		var classes = React.addons.classSet({
			'listing': true,
			'view-showList': this.state.showList,
			'view-detailEntry': this.props.activeEntry
		})
		var classesEntryDetail = React.addons.classSet({
			'entry': true,
			'view-detail': true,
			'is-active': this.props.activeEntry
		})


		return (
			<div className={classes}>

				<a onClick={this.handleOverbarClick} className="listing-overbanner" href="#"><span className="glyphicon glyphicon-th-list"></span>Zobraz další návrhy na tréninky</a>

				<div className="list_group__box list-group">

					<EntryDetail className={classesEntryDetail} entry={this.props.activeEntry} onClose={this.props.onDetailClose} />

					{this.props.entries.map(function(entry) {
						return <Entry onClick={entryClickHandler} entry={entry} />
					})}
				</div>
			</div>
		)
	}
})

module.exports = Listing