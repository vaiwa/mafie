/**
 * @jsx React.DOM
 */

var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var Routes = Router.Routes
var NotFoundRoute = Router.NotFoundRoute
var DefaultRoute = Router.DefaultRoute
var Link = Router.Link

// Application components
var App = require('./app.jsx')
var Dashboard = require('./dashboard.jsx')
var Add = require('./add.jsx')

// Routes definitions
var routes = (
	<Routes location="hash">

		<Route name="app" path="/" handler={App}>
			<Route name="add" path="add" handler={Add}/>
			<DefaultRoute handler={Dashboard}/>
		</Route>

	</Routes>
)

module.exports = routes