import React, { Component } from "react";
import PropTypes from "prop-types";
import { DataView as DataviewDHX, DataCollection } from "dhx-suite";

const template = item => `
	<div class="template template__container">
		<img class="template__image" src="${process.env.PUBLIC_URL + "/static/" + item.img}" />
		<h2 class="template__title">${item.title}</h2>
		<p class="template__description">${item.short}</p>
	</div>
`;

class Dataview extends Component {
	componentDidMount() {
		this.dataview = new DataviewDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			template: template,
			itemsInRow: 4,
			gap: 10,
		});

		this.dataview.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
	}
	componentWillUnmount() {
		this.dataview && this.dataview.destructor();
	}
	render() {
		return <div style={{ width: "100%", height: "400px" }} ref={el => (this.el = el)}></div>;
	}
}

Dataview.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
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

export default Dataview;
