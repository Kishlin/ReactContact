var React = require('react');
var AppActions = require('../actions/AppActions');

var Contact = require('./Contact.jsx')

var Contact = React.createClass({
	handleEdit: function(contact, j) {
		AppActions.editContact(contact);
	},

	handleRemove: function(id, j) {
		AppActions.removeContact(id);
	},

	render: function() {
		return(
			<tr>
				<td>{this.props.contact.name}</td>
				<td>{this.props.contact.phone}</td>
				<td>{this.props.contact.email}</td>
				<td><a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact)}>Edit</a> <a href="#" className="btn btn-danger" onClick={this.handleRemove.bind(this, this.props.contact.id)}>Delete</a></td>
			</tr>
		);
	}
});

module.exports = Contact;