import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Calendar as CalendarDHX, message } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class CalendarEvents extends Component {
  componentDidMount() {
    this.calendar = new CalendarDHX(this.el, {
      css: "dhx_widget--bordered",
      value: new Date(),
    });
    
    let events = [
      "change",
      "dateHover",
      "beforeChange"
    ];
    let counter = 1;

    events.forEach((event) =>  {
      this.calendar.events.on(event,() => {
        message({position: "top-right", expire: 3000, text: getEvent(event), icon: "dxi dxi-close" });
      });
    });

    function getEvent(event) {
      return "Event " + counter++ + ": " + event
    }
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
CalendarEvents.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
	date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
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

export default CalendarEvents;
