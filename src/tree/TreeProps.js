
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Tree extends Component {
  componentDidMount() {
    let { css, data, keyNavigation, autoload, checkbox } = this.props
    this.tree = new TreeDHX(this.el, {
      css: css,
      keyNavigation: keyNavigation,
      autoload: autoload,
      checkbox: checkbox,
      data: data
    })
    // this.tree.data.load('./static/tree.json')
  }
  componentWillUnmount() {
    this.tree.destructor();
  }
  render() {
    return (
      <div style={{minWidth: 270}} ref={el => this.el = el}></div>
    );
  }
} 

class TreeProps extends Component {
  getData() {
    const data = new TreeCollection()
    data.load('./static/tree.json')
    return data
  }
  render() {
    return (
      <Tree 
        css={"dhx_widget--bg_white"}
        keyNavigation={true}
        autoload={true}
        checkbox={true}
        data={this.getData()}
      />
    );
  }
}
TreeProps.propTypes = {
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ]),
	css: PropTypes.string,
	keyNavigation: PropTypes.bool,
	autoload: PropTypes.string,
	checkbox: PropTypes.bool,
	isFolder: PropTypes.func,
};

export default TreeProps;
