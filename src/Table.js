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

const TableBody = () => {
	return <tbody />;
};

class Table extends Component {
	render() {
		// equivalent to characterData=this.props.characterData
		const {characterData} = this.props;
		// passing characterData prop into the table body
		return (
			<table>
				<TableHeader />
				<TableBody characterData={characterData} />
			</table>
		);
	}
}

export default Table;
