/**
 * @jsx React.DOM
 */

var React = require('react')

var sports = require('../shared/sports')

var FilterSport = React.createClass({

	handleChange: function(e) {
		this.props.onChange(e.target.value)
	},

	render: function() {
		return (
			<div className="filterSport">
				<select onChange={this.handleChange} value={this.props.value}>
					{sports.map(function(sport) {
						return <option key={sport.id} value={sport.id}>{sport.title}</option>
					})}
				</select>
			</div>
		)
	}
})

module.exports = FilterSport