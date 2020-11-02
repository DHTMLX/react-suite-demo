import React, { Component } from "react";
import PropTypes from "prop-types";
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";

class Toolbar extends Component {
	componentDidMount() {
		this.toolbar = new ToolbarDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			navigationType: "pointer",
		});
		this.toolbar.data.load(`${process.env.PUBLIC_URL}/static/toolbar.json`);
	}
	componentWillUnmount() {
		this.toolbar.destructor();
	}
	render() {
		return <div style={{ width: "100%" }} ref={el => (this.el = el)}></div>;
	}
}

Toolbar.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	navigationType: PropTypes.string,
};

export default Toolbar;
