
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Window as WindowDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Window extends Component {
  componentDidMount() {
    let {css } = this.props
    this.window = new WindowDHX(this.el, {
      css: css,
    })
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

class WindowProps extends Component {
  render() {
    return (
      <Window 
				css="dhx_widget--bordered"
      />
    );
  }
}
WindowProps.propTypes = {
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

export default WindowProps;
