import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid as GridDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class GridConfigured extends Component {
	componentDidMount() {
		this.grid = new GridDHX(this.el, {
			columns: [
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
			],
			rowHeight: 60,
			adjust: true,
			autoWidth: true,
			editable: true,
			multiselection: true,
			selection: "complex",
		});
		this.grid.data.load(`${process.env.PUBLIC_URL}/static/grid.json`);
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

GridConfigured.propTypes = {
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

export default GridConfigured;
