
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Window as WindowDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class WindowConfigured extends Component {
  componentDidMount() {
    this.window = new WindowDHX(this.el, {
			width: 440, 
			height: 520, 
			title: "Window",
			closable: true,
			html: "<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='./static/developer.svg'>"
		});
  }
  componentWillUnmount() {
    this.window.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
WindowConfigured.propTypes = {
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

export default WindowConfigured;
