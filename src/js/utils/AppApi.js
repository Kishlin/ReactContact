var firebase 	  = require('firebase'); 
var AppActions    = require('../actions/AppActions');
var AppConstants  = require('../constants/AppConstants');


module.exports = {
	saveContact: function(contact){
		var database = firebase.database();
  		var newKey = firebase.database().ref().child('contacts').push().key;

		var updates = {};
		updates['/contacts/' + newKey] = contact;

		firebase.database().ref().update(updates);

		return newKey;
	},

	getContacts: function(){
		var database = firebase.database();
		database.ref().once('value', function(snapshot) {
			var contacts = [];
			snapshot.forEach(function(childSnapshot) {
				Object.keys(childSnapshot.val()).forEach(function(key) {
					var data = childSnapshot.val()[key];
					var contact = {
						id:  key,
						name: data.name,
						phone: data.phone,
						email: data.email
					}
					contacts.push(contact);
				});
			});

			AppActions.receiveContacts(contacts);
		});
	}
}