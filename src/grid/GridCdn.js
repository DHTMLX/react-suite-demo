
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class GridCDN extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
			this.grid = new dhx.Grid(this.el, {
        css: "dhx_widget--bordered",
      });

      if (this.props.ready) {
        this.props.ready(this.grid);
			}
    });
  }
  componentWillUnmount() {
    if (this.grid) {
			this.grid.destructor();
		}
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
GridCDN.propTypes = {
};
export default GridCDN;
