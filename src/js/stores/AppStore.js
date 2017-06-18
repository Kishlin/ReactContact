var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var EventEmitter  = require('events').EventEmitter;
var assign 		  = require('object-assign');
var AppApi   	  = require('../utils/AppApi');

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {

});

AppDispatcher.register(function(payload) {

});

module.exports = AppStore;