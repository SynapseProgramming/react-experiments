import React, {Component} from "react";

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
			</tr>
		</thead>
	);
};

//each object element is replaced by the esx statements below using map.
const TableBody = props => {
	const rows = props.characterData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
			</tr>
		);
	});
	return <tbody>{rows}</tbody>;
};

class Table extends Component {
	render() {
		// equivalent to characterData=this.props.characterData
		const {characterData} = this.props;
		// passing characterData prop into TableBody this would be passed
		// to the lamda argument
		return (
			<table>
				<TableHeader />
				<TableBody characterData={characterData} />
			</table>
		);
	}
}

export default Table;
