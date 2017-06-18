var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var EventEmitter  = require('events').EventEmitter;
var assign 		  = require('object-assign');
var AppApi   	  = require('../utils/AppApi');

var CHANGE_EVENT = 'change';

var _contacts = [];

var AppStore = assign({}, EventEmitter.prototype, {
	getContacts: function() {
		return _contacts;
	},

	saveContact: function(contact) {
		_contacts.push(contact);
	},

	receiveContacts: function(contacts) {
		_contacts = contacts;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {
		case AppConstants.SAVE_CONTACT:
			// Save to API
			var key = AppApi.saveContact(action.contact);

			// Store Save
			action.contact.key = key;
			AppStore.saveContact(action.contact);

			// Emit Change
			AppStore.emitChange();
			
			break;
		case AppConstants.RECEIVE_CONTACTS:
			AppStore.receiveContacts(action.contacts);
			AppStore.emitChange();
			break;
	}

	return true;
});

module.exports = AppStore;