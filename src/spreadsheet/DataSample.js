import React, {Component} from "react";
import SpreadsheetComponent from "./Spreadsheet";

class DataSample extends Component {
	constructor(props) {
		super(props);
		this.spreadsheet = React.createRef();
		this.state = {
			event: ""
		};
	}

	componentDidMount() {
		this.spreadsheet.current.spreadsheet.events.on("afterValueChange", (cell, value) => {
			this.setState({event: `Value in cell ${cell} changed to ${value}`});
		});
		this.spreadsheet.current.spreadsheet.setValue("A1", 10);
	}

	render() {
		return (
			<div className='app-box'>
				<p>Data and events</p>
				<SpreadsheetComponent ref={this.spreadsheet}></SpreadsheetComponent>
				<div style={{padding: "8px 0"}}>{this.state.event}</div>
				<button onClick={this.parseData}>Parse data</button>
				<button onClick={this.clearAll}>Clear all</button>
			</div>
		);
	}

	clearAll = () => {
		this.spreadsheet.current.spreadsheet.parse([]);
		this.setState({event: ""});
	};
	parseData = () => {
		this.spreadsheet.current.spreadsheet.parse([
			{cell: "A1", value: 1000},
			{cell: "B1", value: 5300},
			{cell: "C1", value: 2900}
		]);
	};
}

export default DataSample;
