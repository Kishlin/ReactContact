var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');

var AppActions = {
	receiveContacts: function(contacts) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_CONTACTS,
			contacts:   contacts
		});
	},

	saveContact: function(contact) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_CONTACT,
			contact:    contact
		});
	},

	removeContact: function(id) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_CONTACT,
			contactId:  id
		});
	},

	updateContact: function(contact) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.UPDATE_CONTACT,
			contact:  contact
		});
	},

	editContact: function(contact) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_CONTACT,
			contact:  contact
		});
	}
} 

module.exports = AppActions;