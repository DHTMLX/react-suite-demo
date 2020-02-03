import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class LayoutCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css"
		]);
	}
	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.layout = new dhx.Layout(this.el, {
				css: "dhx_widget--bordered"
			});

			if (this.props.ready) {
				this.props.ready(this.layout);
			}
		});
	}
	componentWillUnmount() {
		this.layout && this.layout.destructor();
	}
	render() {
		return (
			<div ref={el => this.el = el}></div>
		);
	}
}

LayoutCDN.propTypes = {};
export default LayoutCDN;
