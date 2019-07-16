
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.css";
import "@mdi/font/css/materialdesignicons.min.css";

class Menu extends Component {
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
      <div style={{width: '100%', maxWidth: 1200}}ref={el => this.el = el}></div>
    );
  }
}
Menu.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default Menu;
