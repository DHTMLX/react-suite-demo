import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Calendar as CalendarDHX } from "dhx-suite";

class Calendar extends Component {
  componentDidMount() {
    let {css, value, weekNumbers, timePicker, timeFormat } = this.props
    this.calendar = new CalendarDHX(this.el, {
      css: css,
      value: value,
      weekNumbers: weekNumbers,
      timePicker: timePicker,
      timeFormat: timeFormat,
    })
  }
  componentWillUnmount() {
    this.calendar.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
} 

class CalendarProps extends Component {
  render() {
    return (
      <Calendar 
        css={"dhx_widget--bordered"}
        value={new Date()}
        weekNumbers={true}
        timePicker={true}
        timeFormat={12}
        thisMonthOnly={true} 
      />
    );
  }
}
CalendarProps.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
	date: PropTypes.string,
	css: PropTypes.string,
	mark: PropTypes.func,
	block: PropTypes.func,
	weekStart: PropTypes.oneOf(["monday", "sunday"]),
	weekNumbers: PropTypes.bool,
  view: PropTypes.oneOf(["calendar", "year", "month", "timepicker"]),
	timePicker: PropTypes.bool,
	dateFormat: PropTypes.string,
	timeFormat: PropTypes.oneOf([24, 12]),
	thisMonthOnly: PropTypes.bool,
	width: PropTypes.string,
};

export default CalendarProps;
