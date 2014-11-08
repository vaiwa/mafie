/**
 * @jsx React.DOM
 */

var React = require('react')

var sports = require('../shared/sports')

var FilterSport = React.createClass({

	getInitialState: function() {
		return {
			sport: 'all'
		}
	},

	handleChange: function(e) {
		this.props.onChange(e.target.value)
		this.setState({
			sport: e.target.value
		})
	},

	render: function() {
		return (
			<div className="filterSport">
				<select onChange={this.handleChange} value={this.state.sport}>
					{sports.map(function(sport) {
						return <option key={sport.id} value={sport.id}>{sport.title}</option>
					})}
				</select>
			</div>
		)
	}
})

module.exports = FilterSport