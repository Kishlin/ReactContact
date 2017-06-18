var firebase      = require('firebase'); 
var React 	      = require('react');
var ReactDOM      = require('react-dom');
var AppApi        = require('./utils/AppApi');
var AppConstants  = require('./constants/AppConstants');

var App 	 = require('./components/App.jsx');

firebase.initializeApp(AppConstants.FIREBASE);
AppApi.getContacts();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);