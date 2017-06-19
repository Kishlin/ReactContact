var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var AddForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		var contact = {
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		AppActions.saveContact(contact);
	},

	render: function() {
		return(
			<div className="well">
				<h3>Add Contact</h3>
				<form onSubmit={this.handleSubmit} >
					<div className="form-group">
						<input type="text" ref="name" className="form-control" placeholder="Contact name" required />
					</div>
					<div className="form-group">
						<input type="text" ref="phone" className="form-control" placeholder="Contact phone" required />
					</div>
					<div className="form-group">
						<input type="email" ref="email" className="form-control" placeholder="Contact email" required />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = AddForm;