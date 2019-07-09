import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class CalendarCdn extends Component {
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
      this.calendar = new dhx.Calendar(this.el, {
        css: "dhx_widget--bordered",
        value: new Date(),
      });

      if (this.props.ready)
        this.props.ready(this.calendar);
    });
  }
  componentWillUnmount() {
    if (this.calendar)
      this.calendar.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
CalendarCdn.propTypes = {
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
export default CalendarCdn;
