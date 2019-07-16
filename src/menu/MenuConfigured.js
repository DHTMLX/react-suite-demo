
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class MenuConfigured extends Component {
  componentDidMount() {
    this.menu = new MenuDHX(this.el, {
      css: "dhx_widget--bordered",
    });
    this.menu.data.load('./static/menu.json')
  }
  componentWillUnmount() {
    this.menu.destructor();
  }
  render() {
    return (
      <div style={{width: '100%', maxWidth: 1200}} ref={el => this.el = el}></div>
    );
  }
}
MenuConfigured.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default MenuConfigured;
