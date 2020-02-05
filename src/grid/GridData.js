import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Grid as GridDHX, DataCollection } from "dhx-suite";

import "dhx-suite/codebase/suite.min.css";

class Grid extends Component {
	componentDidMount() {
		const { rowHeight, adjust, autoWidth, columns, data, editable, multiselection, selection } = this.props;
		this.grid = new GridDHX(this.el, {
			rowHeight: rowHeight,
			adjust: adjust,
			autoWidth: autoWidth,
			columns: columns,
			data: data, 
			editable: editable,
			multiselection: multiselection,
			selection: selection
		});
	}
	componentWillUnmount() {
		this.grid && this.grid.destructor();
	}
	render() {
		return (
			<div style={{width: "100%", height: "500px"}} ref={el => this.el = el}></div>
		);
	}
}
class GridData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			firstItem: null
		};
		this.data = new DataCollection();

		this.data.events.on("load", () => {
			this.setState({
				firstItem: this.data.getId(0) ? this.data.getItem(this.data.getId(0)).country : ""
			});
		});
		this.data.load(`${process.env.PUBLIC_URL}/static/grid.json`).then(() => {
			this.data.events.on("change", () => {
				this.setState({
					firstItem: this.data.getId(0) ? this.data.getItem(this.data.getId(0)).country : ""
				});
			});
		});
	}
	componentWillUnmount() {
		this.data.events.detach("load");
	}
	handleClick() {
		if (this.state.firstItem) {
			this.data.remove(this.data.getId(0));
		} else {
			this.data.load(`${process.env.PUBLIC_URL}/static/grid.json`);
		}
	}
	render() {
		const columns = [
			{minWidth: 200, id: "country", header: [{text: "Country"}]},
			{minWidth: 125, id: "population", header: [{text: "Population"}]},
			{minWidth: 125, id: "yearlyChange", header: [{text: "Yearly Change"}]},
			{minWidth: 125, id: "netChange", header: [{text: "Net Change"}]},
			{minWidth: 125, id: "destiny", header: [{text: "Density (P/Km²)"}]},
			{minWidth: 125, id: "area", header: [{text: "Land Area (Km²)"}]},
			{minWidth: 125, id: "migrants", header: [{text: "Migrants (net)"}]},
			{minWidth: 125, id: "fert", header: [{text: "Fert. Rate"}]},
			{minWidth: 125, id: "age", header: [{text: "Med. Age"}]},
			{minWidth: 125, id: "urban", header: [{text: "Urban Pop"}]}
		];
		return (
			<div style={{width: "100%", height: "550px"}}>
				<Grid
					rowHeight={60}
					adjust={true}
					autoWidth={true}
					columns={columns}
					data={this.data}
					editable={true}
					multiselection={true}
					selection={"complex"}
				/>
				<div style={{display: "flex", justifyContent: "center", padding: 20}}>
					<button className="button" onClick={() => this.handleClick()}>
						{this.state.firstItem ? `Remove ${this.state.firstItem} row` : "Reset"}
					</button>
				</div>
			</div>
		);
	}
}

Grid.propTypes = {
	columns: PropTypes.array,
	spans: PropTypes.array,
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.instanceOf(DataCollection)
	]),
	headerRowHeight: PropTypes.number,
	footerRowHeight: PropTypes.number,
	rowHeight: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	sortable: PropTypes.bool,
	rowCss: PropTypes.func,
	splitAt: PropTypes.number,
	selection: PropTypes.bool,
	sortable: PropTypes.bool,
	autoWidth: PropTypes.bool,
	css: PropTypes.string,
	selection: PropTypes.oneOf(["complex", "row", "cell"]),
	resizeble: PropTypes.bool,
	multiselection: PropTypes.bool,
	keyNavigation: PropTypes.bool,
	htmlEnable: PropTypes.bool,
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf(["target", "source", "both"]),
	dragCopy: PropTypes.bool,
	adjust: PropTypes.bool,
	autoEmptyRow: PropTypes.bool
};

export default GridData;