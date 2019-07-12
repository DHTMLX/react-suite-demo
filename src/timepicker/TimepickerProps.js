
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timepicker as TimepickerDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Timepicker extends Component {
  componentDidMount() {
    let {css } = this.props
    this.timepicker = new TimepickerDHX(this.el, {
      css: css,
    })
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
      />
    );
  }
}
TimepickerProps.propTypes = {
  
};

export default TimepickerProps;
