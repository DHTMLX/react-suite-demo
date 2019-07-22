
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class WindowCDN extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.min.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
			this.window = new dhx.Window(this.el, {
        css: "dhx_widget--bordered",
      });

      if (this.props.ready) {
        this.props.ready(this.window);
			}
    });
  }
  componentWillUnmount() {
    if (this.window) {
			this.window.destructor();
		}
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
WindowCDN.propTypes = {
};
export default WindowCDN;
