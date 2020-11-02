import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class RibbonCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css",
			"https://cdn.materialdesignicons.com/3.8.95/css/materialdesignicons.min.css",
		]);
	}
	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.ribbon = new dhx.Ribbon(this.el, {
				css: "dhx_widget--bordered dhx_widget--bg_white",
			});
			this.ribbon.data.load(`${process.env.PUBLIC_URL}/static/ribbon.json`);
			if (this.props.ready) {
				this.props.ready(this.ribbon);
			}
		});
	}
	componentWillUnmount() {
		this.ribbon && this.ribbon.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

RibbonCDN.propTypes = {
	css: PropTypes.string,
	data: PropTypes.oneOfType([PropTypes.array]),
};

export default RibbonCDN;
