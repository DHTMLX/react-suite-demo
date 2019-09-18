
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class WindowCDN extends Component {
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
  css: PropTypes.string,

	title: PropTypes.string,
	html: PropTypes.string,

	minWidth: PropTypes.number,
	minHeight: PropTypes.number,

	left: PropTypes.number,
	top: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,

	footer: PropTypes.bool,
	header: PropTypes.bool,
	viewportOverflow: PropTypes.bool,
	resizable: PropTypes.bool,
	movable: PropTypes.bool,
	modal: PropTypes.bool,
	closable: PropTypes.bool,
};
export default WindowCDN;
