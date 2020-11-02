import React, { Component } from "react";
import PropTypes from "prop-types";
import { List as ListDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ListConfigured extends Component {
	componentDidMount() {
		this.list = new ListDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			template: item =>
				`<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.title}</strong> <span>${item.short}</span></div>`,
			height: 400,
			itemHeight: 70,
			keyNavigation: true,
			dragMode: "both",
		});
		this.list.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
	}
	componentWillUnmount() {
		this.list && this.list.destructor();
	}
	render() {
		return <div style={{ height: 400, width: 400 }} ref={el => (this.el = el)}></div>;
	}
}

ListConfigured.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
	virtual: PropTypes.bool,
	height: PropTypes.number,
	itemHeight: PropTypes.number,
	multiselection: PropTypes.bool || PropTypes.oneOf(["click", "ctrlClick"]),
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf(["target", "source", "both"]),
	dragCopy: PropTypes.bool,
};

export default ListConfigured;
