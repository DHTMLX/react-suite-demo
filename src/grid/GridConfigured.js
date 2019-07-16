
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid as GridDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class GridConfigured extends Component {
  componentDidMount() {
    this.grid = new GridDHX(this.el, {
			css: "dhx_widget--bordered",
    });
  }
  componentWillUnmount() {
    this.grid.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
GridConfigured.propTypes = {
  
};

export default GridConfigured;
