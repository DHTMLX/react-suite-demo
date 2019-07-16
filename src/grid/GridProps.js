
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid as GridDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Grid extends Component {
  componentDidMount() {
    let {css } = this.props
    this.grid = new GridDHX(this.el, {
      css: css,
    })
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

class GridProps extends Component {
  render() {
    return (
      <Grid 
				css="dhx_widget--bordered"
      />
    );
  }
}
GridProps.propTypes = {
  
};

export default GridProps;
