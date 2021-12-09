import React, {Component} from "react";
import Table from "./Table";

class App extends Component {
	render() {
		// characters is an array of objects
		const characters = [
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
		];
		// data is passed from one component to another through props(properties)
		// In this case, the characters object is passed through the characterData prop
		return (
			<div className="contain">
				<Table characterData={characters} />
			</div>
		);
	}
}

export default App;
