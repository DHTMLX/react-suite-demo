
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timepicker as TimepickerDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class TimepickerConfigured extends Component {
  componentDidMount() {
    this.timepicker = new TimepickerDHX(this.el, {
      css: "dhx_widget--bordered",
      actions: true,
      timeFormat: 12
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
TimepickerConfigured.propTypes = {
  css: PropTypes.string,
	timeFormat: PropTypes.oneOf([12, 24]),
	actions: PropTypes.bool,
};

export default TimepickerConfigured;
