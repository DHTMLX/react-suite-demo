import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Timepicker as TimepickerDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";


class TimepickerEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      id: ''
    }
  }

  componentDidMount() {
    this.timepicker = new TimepickerDHX(this.el, {
      css: "dhx_widget--bordered",
    });

    this.timepicker.events.on('change', id => this.setState({event: 'change', id: id}))
    this.timepicker.events.on('close', id => this.setState({event: 'close', id: id}))
  }

  componentWillUnmount() {
    this.timepicker && this.timepicker.destructor();
  }

  render() {
    return (
      <div>
        <div ref={el => this.el = el} style={{maxWidth: 248, marginLeft: 'auto', marginRight: 'auto'}}></div>
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button button--bordered">{`Event: ${this.state.event}`}</button>
          <button className="button button--bordered">Item: {this.state.id ? this.state.id : ''}</button>
        </div>
      </div>
    );
  }
}

TimepickerEvents.propTypes = {
  css: PropTypes.string,
	timeFormat: PropTypes.oneOf([12, 24]),
	actions: PropTypes.bool,
};

export default TimepickerEvents;
