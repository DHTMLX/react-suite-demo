
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout as LayoutDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class LayoutConfigured extends Component {
  componentDidMount() {
    this.layout = new LayoutDHX(this.el, {
			css: "dhx_widget--bordered",
    });
  }
  componentWillUnmount() {
    this.layout.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
LayoutConfigured.propTypes = {
  
};

export default LayoutConfigured;
