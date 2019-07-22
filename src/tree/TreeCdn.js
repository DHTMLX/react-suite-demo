
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class TreeCDN extends Component {
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
			this.tree = new dhx.Tree(this.el, {
        css: "dhx_widget--bg_white",
      });
      this.tree.data.load('./static/tree.json')
      if (this.props.ready) {
        this.props.ready(this.tree);
			}
    });
  }
  componentWillUnmount() {
    if (this.tree) {
			this.tree.destructor();
		}
  }
  render() {
    return (
      <div style={{minWidth: 270}} ref={el => this.el = el}></div>
    );
  }
}
TreeCDN.propTypes = {
  data: PropTypes.instanceOf([
    PropTypes.array
  ]),
	css: PropTypes.string,
	keyNavigation: PropTypes.bool,
	autoload: PropTypes.string,
	checkbox: PropTypes.bool,
	isFolder: PropTypes.func,
};
export default TreeCDN;
