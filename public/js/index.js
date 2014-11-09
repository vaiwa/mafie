var plugins = require('./plugins')

// React init
var React = require('react')
React.initializeTouchEvents(true)

// Initialize the app
var router = require('../components/router.jsx')
React.renderComponent(router, document.body);

