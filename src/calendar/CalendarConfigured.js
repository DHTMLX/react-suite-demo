import React, { Component } from "react";
import PropTypes from "prop-types";
import { Calendar as CalendarDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class CalendarConfigured extends Component {
	componentDidMount() {
		this.calendar = new CalendarDHX(this.el, {
			css: "dhx_widget--bordered",
			weekNumbers: true,
			value: new Date(),
			timePicker: true,
			timeFormat: 12,
			thisMonthOnly: false,
		});
	}
	componentWillUnmount() {
		this.calendar && this.calendar.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

CalendarConfigured.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
	date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
	css: PropTypes.string,
	mark: PropTypes.func,
	disabledDates: PropTypes.func,
	weekStart: PropTypes.oneOf(["monday", "sunday"]),
	weekNumbers: PropTypes.bool,
	mode: PropTypes.oneOf(["calendar", "year", "month", "timepicker"]),
	timePicker: PropTypes.bool,
	dateFormat: PropTypes.string,
	timeFormat: PropTypes.oneOf([24, 12]),
	thisMonthOnly: PropTypes.bool,
	width: PropTypes.string,
	range: PropTypes.bool,
};

export default CalendarConfigured;
