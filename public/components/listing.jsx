/**
 * @jsx React.DOM
 */

var React = require('react')
var addons = require('react/addons')

var Entry = require('./entry.jsx')
var EntryDetail = require('./entryDetail.jsx')

var Listing = React.createClass({

	render: function() {
		var entryClickHandler = this.props.onEntryClick

		var classes = React.addons.classSet({
			'listing': true,
			'view-showList': this.props.showList,
			'view-detailEntry': this.props.activeEntry
		})
		var classesEntryDetail = React.addons.classSet({
			'entry': true,
			'view-detail': true,
			'is-active': this.props.activeEntry
		})

		// Empty state
		if(this.props.entries.length <= 0){
			return (
				<div className="listing view-empty">
					<h2 className="listing-title">Nikdo nechce hrát {this.props.sport}, nevadí!</h2>
					<p>Buď první kdo prolomí ledy a zadej svůj nápad na trénink.<br/>&nbsp;</p>
					<p className="text-center"><a href="#/add" className="btn btn-primary btn-lg">Přidej nápad</a></p>
				</div>
			)
		}

		// Normal state
		return (
			<div className={classes}>
				<a onClick={this.props.onOverbarClick} className="listing-overbanner" href="#"><span className="glyphicon glyphicon-th-list"></span>Zobraz další nápady na tréninky</a>
						<a href="#/add" className="circle">+</a>

				<div className="list_group__box list-group">
					<EntryDetail classes={classesEntryDetail} entry={this.props.activeEntry} onClose={this.props.onDetailClose} onSubmit={this.props.onDetailSubmit} />

					{this.props.entries.map(function(entry) {
						return <Entry key={entry._id} onClick={entryClickHandler} entry={entry} />
					})}
				</div>
			</div>
		)
	}
})

module.exports = Listing