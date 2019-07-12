
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Colorpicker as ColorpickerDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Colorpicker extends Component {
  componentDidMount() {
    let {css } = this.props
    this.colorpicker = new ColorpickerDHX(this.el, {
      css: css,
    })
  }
  componentWillUnmount() {
    this.colorpicker.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
} 

class ColorpickerProps extends Component {
  render() {
    return (
      <Colorpicker 
				css="dhx_widget--bordered"
      />
    );
  }
}
ColorpickerProps.propTypes = {
  
};

export default ColorpickerProps;
