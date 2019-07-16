
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class MenuCDN extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css",
      "https://cdn.materialdesignicons.com/3.8.95/css/materialdesignicons.min.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
			this.menu = new dhx.Menu(this.el, {
        css: "dhx_widget--bordered",
      });
      this.menu.data.load('./static/menu.json')
      if (this.props.ready) {
        this.props.ready(this.menu);
			}
    });
  }
  componentWillUnmount() {
    if (this.menu) {
			this.menu.destructor();
		}
  }
  render() {
    return (
      <div style={{width: '100%', maxWidth: 1200}}  ref={el => this.el = el}></div>
    );
  }
}
MenuCDN.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
  ])
};
export default MenuCDN;
