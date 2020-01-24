import React, {Component} from "react";
import PropTypes from "prop-types";
import {Timepicker as TimepickerDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Timepicker extends Component {
	componentDidMount() {
		let {css, actions, timeFormat} = this.props;
		this.timepicker = new TimepickerDHX(this.el, {
			css: css,
			actions: actions,
			timeFormat: timeFormat
		});
	}

	componentWillUnmount() {
		this.timepicker.destructor();
	}

	render() {
		return (
			<div ref={el => this.el = el}></div>
		);
	}
}

class TimepickerProps extends Component {
	render() {
		return (
			<Timepicker
				css="dhx_widget--bordered"
				actions={true}
				timeFormat={12}
			/>
		);
	}
}

TimepickerProps.propTypes = {
	css: PropTypes.string,
	timeFormat: PropTypes.oneOf([12, 24]),
	actions: PropTypes.bool
};

export default TimepickerProps;
