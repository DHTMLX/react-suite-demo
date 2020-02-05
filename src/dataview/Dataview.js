import React, { Component } from "react";
import PropTypes from "prop-types";
import { DataView as DataviewDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

const template = (item) => (
	`<div class='item_wrap item-wrap--grid'>
    <img class='image' style="max-width: 150px" src="${process.env.PUBLIC_URL + "/static/" + item.img}" />
    <h2 class='title'>${item.title}</h2>
    <div>${item.short}</div>
  </div>
  `
);

class Dataview extends Component {
	componentDidMount() {
		this.dataview = new DataviewDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			template: template,
			itemsInRow: 6
		});

		this.dataview.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
	}
	componentWillUnmount() {
		this.dataview && this.dataview.destructor();
	}
	render() {
		return (
			<div style={{width: "100%"}} ref={el => this.el = el}></div>
		);
	}
}

Dataview.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.instanceOf(DataCollection)
	]),
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
	dragCopy: PropTypes.bool
};

export default Dataview;
