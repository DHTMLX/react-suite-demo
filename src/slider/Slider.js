
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Slider as SliderDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Slider extends Component {
  componentDidMount() {
    this.slider = new SliderDHX(this.el, {
    });
  }
  componentWillUnmount() {
    this.slider.destructor();
  }
  render() {
    return (
      <div style={{width: "100%"}} ref={el => this.el = el}></div>
    );
  }
}
Slider.propTypes = {
  
};

export default Slider;
