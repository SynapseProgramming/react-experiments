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
			</form>
		);
	}
}

export default Form;
