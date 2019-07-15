
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar as SidebarDHX, TreeCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Sidebar extends Component {
  componentDidMount() {
    let {css, data } = this.props
    this.sidebar = new SidebarDHX(this.el, {
      css: css,
      data: data
    })
  }
  componentWillUnmount() {
    this.sidebar.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
} 

class SidebarProps extends Component {
  
  getData() {
    const data = new TreeCollection()
    data.load('./static/sidebar.json')
    return data
  }

  render() {
    return (
      <Sidebar 
				css="dhx_widget--bordered dhx_widget--bg_white"
        data={this.getData()}
      />
    );
  }
}
SidebarProps.propTypes = {
  css: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  collapsed: PropTypes.bool, 
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default SidebarProps;
