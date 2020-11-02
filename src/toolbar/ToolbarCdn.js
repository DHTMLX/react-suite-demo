import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class ToolbarCdn extends Component {
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
			this.toolbar = new dhx.Toolbar(this.el, {
				css: "dhx_widget--bordered dhx_widget--bg_white",
				navigationType: "pointer",
			});
			this.toolbar.data.load(`${process.env.PUBLIC_URL}/static/toolbar.json`);

			if (this.props.ready) {
				this.props.ready(this.toolbar);
			}
		});
	}
	componentWillUnmount() {
		this.toolbar && this.toolbar.destructor();
	}
	render() {
		return <div style={{ width: "100%" }} ref={el => (this.el = el)}></div>;
	}
}

ToolbarCdn.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array]),
	navigationType: PropTypes.string,
};

export default ToolbarCdn;
