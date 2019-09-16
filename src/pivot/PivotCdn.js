
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class PivotCDN extends Component {
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
			this.pivot = new dhx.Pivot(this.el, {
        css: "dhx_widget--bordered",
      });

      if (this.props.ready) {
        this.props.ready(this.pivot);
			}
    });
  }
  componentWillUnmount() {
    if (this.pivot) {
			this.pivot.destructor();
		}
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
PivotCDN.propTypes = {
};
export default PivotCDN;
