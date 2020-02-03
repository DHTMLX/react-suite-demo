import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Grid as GridDHX, TreeCollection } from "dhx-suite";

import "dhx-suite/codebase/suite.min.css";

class Grid extends Component {
	componentDidMount() {
		let {rowHeight, columnsAutoWidth, fitToContainer, columns, data} = this.props;
		this.grid = new GridDHX(this.el, {
			rowHeight: rowHeight,
			columnsAutoWidth: columnsAutoWidth,
			fitToContainer: fitToContainer,
			columns: columns,
			data: data
		});
	}

	componentWillUnmount() {
		this.grid && this.grid.destructor();
	}
	render() {
		return (
			<div style={{width: "100%", maxWidth: 1350, height: "500px"}} ref={el => this.el = el}></div>
		);
	}
}

class GridData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			firstItem: null
		};
		this.data = new TreeCollection();

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
			{width: 200, id: "country", header: [{text: "Country"}]},
			{width: 125, id: "population", header: [{text: "Population"}]},
			{width: 125, id: "yearlyChange", header: [{text: "Yearly Change"}]},
			{width: 125, id: "netChange", header: [{text: "Net Change"}]},
			{width: 125, id: "destiny", header: [{text: "Density (P/Km²)"}]},
			{width: 125, id: "area", header: [{text: "Land Area (Km²)"}]},
			{width: 125, id: "migrants", header: [{text: "Migrants (net)"}]},
			{width: 125, id: "fert", header: [{text: "Fert. Rate"}]},
			{width: 125, id: "age", header: [{text: "Med. Age"}]},
			{width: 125, id: "urban", header: [{text: "Urban Pop"}]}
		];
		return (
			<div style={{width: "100%", maxWidth: 1350, height: "550px"}}>
				<Grid
					rowHeight={60}
					columnsAutoWidth={true}
					fitToContainer={true}
					columns={columns}
					data={this.data}
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
		PropTypes.instanceOf(TreeCollection)
	]),
	headerRowHeight: PropTypes.number,
	footerRowHeight: PropTypes.number,
	columnsAutoWidth: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number
	]),
	rowHeight: PropTypes.number,
	type: PropTypes.oneOf([
		"tree"
	]),
	width: PropTypes.number,
	height: PropTypes.number,
	headerSort: PropTypes.bool,
	rowCss: PropTypes.func,
	splitAt: PropTypes.number,
	selection: PropTypes.bool,

	fitToContainer: PropTypes.bool,
	css: PropTypes.string,

	$headerLevel: PropTypes.number,
	$footerLevel: PropTypes.number,
	$totalWidth: PropTypes.number,
	$totalHeight: PropTypes.number,
	$colspans: PropTypes.bool,
	$footer: PropTypes.bool
};

export default GridData;