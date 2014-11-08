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
						{this.props.entries.map(function(data) {
							return <Entry key={data.id} name={data.name} place={data.place} time={data.time} />
						})}
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Listing