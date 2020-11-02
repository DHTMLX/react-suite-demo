import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class SidebarCDN extends Component {
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
			this.sidebar = new dhx.Sidebar(this.el, {
				css: "dhx_widget--bordered dhx_widget--bg_white",
			});
			this.sidebar.data.load(`${process.env.PUBLIC_URL}/static/sidebar.json`);
			if (this.props.ready) {
				this.props.ready(this.sidebar);
			}
		});
	}
	componentWillUnmount() {
		this.sidebar && this.sidebar.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

SidebarCDN.propTypes = {
	css: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	collapsed: PropTypes.bool,
	data: PropTypes.oneOfType([PropTypes.array]),
};

export default SidebarCDN;
