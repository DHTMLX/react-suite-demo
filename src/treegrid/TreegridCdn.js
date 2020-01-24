import React, {Component} from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class TreegridCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/treeGrid/edge/treegrid.js",
			"https://cdn.dhtmlx.com/treeGrid/edge/treegrid.css"
		]);
	}

	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.treegrid = new dhx.Treegrid(this.el, {
				css: "dhx_widget--bordered",
				width: 1020,
				height: 500,
				columns: [
					{width: 260, id: "name", header: [{text: "Name"}]},
					{width: 260, id: "native", type: "string", header: [{text: "Native name"}]},
					{width: 200, id: "capital", type: "string", header: [{text: "Capital"}]},
					{width: 200, id: "currency", type: "string", header: [{text: "Currency"}]}
				]
			});
			this.treegrid.data.load("./static/treegrid.json");
			if (this.props.ready) {
				this.props.ready(this.treegrid);
			}
		});
	}

	componentWillUnmount() {
		if (this.treegrid) {
			this.treegrid.destructor();
		}
	}

	render() {
		return (
			<div ref={el => this.el = el}></div>
		);
	}
}

TreegridCDN.propTypes = {
	columns: PropTypes.array,
	spans: PropTypes.array,
	data: PropTypes.array,
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
export default TreegridCDN;
