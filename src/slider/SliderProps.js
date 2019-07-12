
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slider as SliderDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Slider extends Component {
  componentDidMount() {
    let {css } = this.props
    this.slider = new SliderDHX(this.el, {
      css: css,
    })
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

class SliderProps extends Component {
  render() {
    return (
      <Slider 
      />
    );
  }
}
SliderProps.propTypes = {
  
};

export default SliderProps;
