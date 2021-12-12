import React, {Component} from "react";
import Table from "./Table";

class App extends Component {
	state = {
		characters: [
			{
				name: "Charlie",
				job: "Janitor"
			},
			{
				name: "Mac",
				job: "LOL"
			},
			{
				name: "Dee",
				job: "Aspring actress"
			},
			{
				name: "Dennis",
				job: "Bartender"
			}
		]
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
			</div>
		);
	}
}

export default App;
