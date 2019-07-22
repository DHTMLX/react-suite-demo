
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Window as WindowDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Window extends Component {
  componentDidMount() {
    let {css } = this.props
    this.window = new WindowDHX(this.el, {
      css: css,
    })
  }
  componentWillUnmount() {
    this.window.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
} 

class WindowProps extends Component {
  render() {
    return (
      <Window 
				css="dhx_widget--bordered"
      />
    );
  }
}
WindowProps.propTypes = {
  
};

export default WindowProps;
