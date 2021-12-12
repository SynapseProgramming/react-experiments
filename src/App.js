import React, {Component} from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
	state = {
		characters: []
	};
	removeCharacter = index => {
		const {characters} = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			})
		});
	};

	render() {
		const {characters} = this.state;

		// data is passed from one component to another through props(properties)
		// In this case, the characters object is passed through the characterData prop
		return (
			<div className="contain">
				<Table
					characterData={characters}
					removeCharacter={this.removeCharacter}
				/>
				<Form />
			</div>
		);
	}
}

export default App;
