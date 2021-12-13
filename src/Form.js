import React, {Component} from "react";

class Form extends Component {
	initialState = {
		name: "",
		job: ""
	};

	state = this.initialState;

	handleChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};
	// function to send the state
	submitForm = () => {
		this.props.handleSubmit(this.state);
		// reset the state to the original state
		this.setState(this.initialState);
	};

	render() {
		const {name, job} = this.state;

		return (
			<form>
				<label htmlFor="name">Namae</label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={this.handleChange}
				/>
				<label htmlFor="job">wowdude</label>
				<input
					type="text"
					name="job"
					id="job"
					value={job}
					onChange={this.handleChange}
				/>
				<input type="button" value="Submit" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Form;
