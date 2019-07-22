
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Menu extends Component {
  componentDidMount() {
    let { css, data } = this.props
    this.menu = new MenuDHX(this.el, {
      css: css,
      data: data,
    })
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

class MenuProps extends Component {
  getData() {
    const data = new TreeCollection()
    data.load('./static/menu.json')
    return data
  }
  render() {
    return (
      <Menu 
				css="dhx_widget--bordered"
        data={this.getData()}
      />
    );
  }
}
MenuProps.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default MenuProps;
