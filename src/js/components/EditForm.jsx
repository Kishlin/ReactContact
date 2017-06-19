var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var EditForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		var contact = {
			id: this.props.contact.id, 
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		this.props.contact = contact;

		AppActions.updateContact(contact);
	},

	handleChange: function(fieldname, event) {
		var newState = event.target.value;
		var selected = this.state.selected;

		selected.name = newState;
		this.setState({selected: selected});
	},

	render: function() {
		return(
			<div className="well">
				<h3>Edit {this.props.contact.name}</h3>
				<form onSubmit={this.handleSubmit} >
					<div className="form-group">
						<input type="text" ref="name" className="form-control" placeholder="Contact name" onChange={this.handleChange.bind(this, 'name')} value={this.props.contact.name} required />
					</div>
					<div className="form-group">
						<input type="text" ref="phone" className="form-control" placeholder="Contact phone" onChange={this.handleChange.bind(this, 'phone')} value={this.props.contact.phone} required />
					</div>
					<div className="form-group">
						<input type="email" ref="email" className="form-control" placeholder="Contact email" onChange={this.handleChange.bind(this, 'email')} value={this.props.contact.email} required />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = EditForm;