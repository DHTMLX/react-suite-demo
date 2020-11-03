import React, { Component } from "react";
import PropTypes from "prop-types";
import { Timepicker as TimepickerDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Timepicker extends Component {
	componentDidMount() {
		let { css, controls, timeFormat } = this.props;
		this.timepicker = new TimepickerDHX(this.el, {
			css: css,
			controls: controls,
			timeFormat: timeFormat,
		});
	}
	componentWillUnmount() {
		this.timepicker && this.timepicker.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

class TimepickerProps extends Component {
	render() {
		return <Timepicker css="dhx_widget--bordered" controls={true} timeFormat={12} />;
	}
}

TimepickerProps.propTypes = {
	css: PropTypes.string,
	timeFormat: PropTypes.oneOf([12, 24]),
	controls: PropTypes.bool,
	value: PropTypes.object || PropTypes.number || PropTypes.string
};

export default TimepickerProps;
