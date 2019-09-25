import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Calendar as CalendarDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class CalendarEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      id: ''
    }
  }

  componentDidMount() {
    this.calendar = new CalendarDHX(this.el, {
      css: "dhx_widget--bordered",
      value: new Date(),
    });
    this.calendar.events.on('change', id => this.setState({event: 'change', id: id.toString()}))
    this.calendar.events.on('dateHover', (event, date) => this.setState({event: 'dateHover', id: date.toString()}))
    this.calendar.events.on('beforeChange', id => this.setState({event: 'change', id: id.toString() }))
  }

  componentWillUnmount() {
    this.calendar.destructor();
  }

  render() {
    return (
      <div style = {{width: '100%'}}>
        <div 
          style = {{width: '100%', display: 'flex', justifyContent: 'center'}}
          ref = {el => this.el = el} > 
        </div>
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button button--bordered">{this.state.event ? `Event: ${this.state.event}` : 'Click to widget'}</button>
          <button className="button button--bordered">Item:  {this.state.id ? this.state.id : ''}</button>
        </div>
      </div>
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
