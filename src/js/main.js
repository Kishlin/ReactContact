var React 	 = require('react');
var ReactDOM = require('react-dom');
var AppAPI   = require('./utils/AppApi');

var App 	 = require('./components/App.jsx');

ReactDOM.render(
	<App />,
	document.getElementById('app')
);