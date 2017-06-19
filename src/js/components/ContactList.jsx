var React = require('react');

var Contact = require('./Contact.jsx')

var ContactList = React.createClass({
	render: function() {
		var contacts = this.props.contacts.map(function(contact, inddex) {
			return <Contact key={contact.id} contact={contact} />
		});

		return(
			<div>
				<h3>Contacts</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{contacts}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = ContactList;