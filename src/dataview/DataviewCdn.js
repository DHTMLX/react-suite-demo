import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

const template = item => `
	<div class="template template__container">
		<img class="template__image" src="${process.env.PUBLIC_URL + "/static/" + item.img}" />
		<h2 class="template__title">${item.title}</h2>
		<p class="template__description">${item.short}</p>
	</div>
`;

class DataviewCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css",
		]);
	}
	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.dataview = new dhx.DataView(this.el, {
				css: "dhx_widget--bordered dhx_widget--bg_white",
				template: template,
				itemsInRow: 4,
				gap: 10,
			});
			this.dataview.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
			if (this.props.ready) {
				this.props.ready(this.dataview);
			}
		});
	}
	componentWillUnmount() {
		this.dataview && this.dataview.destructor();
	}
	render() {
		return <div style={{ width: "100%" }} ref={el => (this.el = el)}></div>;
	}
}

DataviewCDN.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
	height: PropTypes.number,
	itemHeight: PropTypes.number,
	itemsInRow: PropTypes.number,
	gap: PropTypes.number,
	multiselection: PropTypes.bool || PropTypes.oneOf(["click", "ctrlClick"]),
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf(["target", "source", "both"]),
	dragCopy: PropTypes.bool,
};

export default DataviewCDN;
