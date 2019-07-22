import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ToolbarConfigured extends Component {
  componentDidMount() {
    this.toolbar = new ToolbarDHX(this.el, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    })
    this.toolbar.data.load('./static/toolbar.json')
  }
  componentWillUnmount() {
    this.toolbar.destructor();
  }
  render() {
    return (
      <div 
        style = {{width: '100%'}}
        ref = {el => this.el = el} > 
      </div>
    );
  }
}

ToolbarConfigured.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default ToolbarConfigured;
