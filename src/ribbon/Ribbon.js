import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ribbon as RibbonDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class Ribbon extends Component {
	componentDidMount() {
		this.ribbon = new RibbonDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
		});
		this.ribbon.data.load(`${process.env.PUBLIC_URL}/static/ribbon.json`);
	}
	componentWillUnmount() {
		this.ribbon && this.ribbon.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

Ribbon.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
};

export default Ribbon;
