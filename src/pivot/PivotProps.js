
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pivot as PivotDHX } from "dhx-pivot";

class Pivot extends Component {
  componentDidMount() {
    window.dhx.css = {}
    let { css } = this.props
    this.pivot = new PivotDHX(this.el, {
      css: css,
    })
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

class PivotProps extends Component {
  render() {
    return (
      <Pivot 
				css="dhx_widget--bordered"
      />
    );
  }
}
PivotProps.propTypes = {
  
};

export default PivotProps;
