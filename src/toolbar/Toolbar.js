import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar as ToolbarDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Toolbar extends Component {
  componentDidMount() {
    this.toolbar = new ToolbarDHX(this.el, {
      css: "dhx_widget--bordered",
    });
  }
  componentWillUnmount() {
    this.toolbar.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
Toolbar.propTypes = {
  
};

export default Toolbar;
