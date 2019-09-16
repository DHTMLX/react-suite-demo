
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pivot as PivotDHX } from "dhx-pivot";

class PivotConfigured extends Component {
  componentDidMount() {
    this.pivot = new PivotDHX(this.el, {
			css: "dhx_widget--bordered",
    });
  }
  componentWillUnmount() {
    this.pivot.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
PivotConfigured.propTypes = {
  
};

export default PivotConfigured;
