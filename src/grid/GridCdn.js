import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class GridCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css"
		]);
	}
	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.grid = new dhx.Grid(this.el, {
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
				adjust: true,
				autoWidth:true
			});
			this.grid.data.load(`${process.env.PUBLIC_URL}/static/grid.json`);
			if (this.props.ready) {
				this.props.ready(this.grid);
			}
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

GridCDN.propTypes = {
	columns: PropTypes.array,
	spans: PropTypes.array,
	data: PropTypes.oneOfType([
		PropTypes.array
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

export default GridCDN;
