
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Window as WindowDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class WindowConfigured extends Component {
  componentDidMount() {
    this.window = new WindowDHX(this.el, {
			css: "dhx_widget--bordered",
    });
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
WindowConfigured.propTypes = {
  
};

export default WindowConfigured;
