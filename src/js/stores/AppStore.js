var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var EventEmitter  = require('events').EventEmitter;
var assign 		  = require('object-assign');
var AppApi   	  = require('../utils/AppApi');

var CHANGE_EVENT = 'change';

var _contacts = [];
var _contact_to_edit = '';

var AppStore = assign({}, EventEmitter.prototype, {
	getContacts: function() {
		return _contacts;
	},

	getContactToEdit: function() {
		return _contact_to_edit;
	},

	saveContact: function(contact) {
		_contacts.push(contact);
	},

	receiveContacts: function(contacts) {
		_contacts = contacts;
	},

	removeContact: function(contactId) {
		var index = _contacts.findIndex(x => x.id === contactId);
		_contacts.splice(index, 1);
	},

	updateContact: function(contact) {
		_contact_to_edit = '';
		var index = _contacts.findIndex(x => x.id === contact.id);
		_contacts.splice(index, 1);
		_contacts.push(contact);
	},

	setContactToEdit: function(contact) {
		_contact_to_edit = contact;
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
			action.contact.id = key;
			AppStore.saveContact(action.contact);

			// Emit Change
			AppStore.emitChange();
			
			break;
		case AppConstants.REMOVE_CONTACT:
			// Remove on API
			AppApi.removeContact(action.contactId);
			
			// Store Remove
			AppStore.removeContact(action.contactId);
			
			// Emit Change
			AppStore.emitChange();
			break;
		case AppConstants.UPDATE_CONTACT:
			// Update on API
			AppApi.updateContact(action.contact);
			
			// Store Update
			AppStore.updateContact(action.contact);
			
			// Emit Change
			AppStore.emitChange();
			break;
		case AppConstants.RECEIVE_CONTACTS:
			AppStore.receiveContacts(action.contacts);
			AppStore.emitChange();
			break;
		case AppConstants.EDIT_CONTACT:
			AppStore.setContactToEdit(action.contact);
			AppStore.emitChange();
			break;
			AppStore.setContactToEdit(action.contact);
		case AppConstants.RECEIVE_CONTACTS:
			break;
	}

	return true;
});

module.exports = AppStore;