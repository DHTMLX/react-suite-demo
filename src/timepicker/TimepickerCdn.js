import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class TimepickerCDN extends Component {
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
			this.timepicker = new dhx.Timepicker(this.el, {
				css: "dhx_widget--bordered",
			});
			if (this.props.ready) {
				this.props.ready(this.timepicker);
			}
		});
	}
	componentWillUnmount() {
		this.timepicker && this.timepicker.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

TimepickerCDN.propTypes = {
	css: PropTypes.string,
	timeFormat: PropTypes.oneOf([12, 24]),
	controls: PropTypes.bool,
	value: PropTypes.object || PropTypes.number || PropTypes.string
};

export default TimepickerCDN;
