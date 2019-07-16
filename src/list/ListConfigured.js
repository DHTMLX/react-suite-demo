
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List as ListDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class ListConfigured extends Component {
  componentDidMount() {
    this.list = new ListDHX(this.el, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.title}</strong> <span>${item.short}</span></div>`, 
      height: 300,
      itemHeight: 70,
    });
    this.list.data.load('static/dataview.json')
  }
  componentWillUnmount() {
    this.list.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
ListConfigured.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(DataCollection)
  ]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
  css: PropTypes.string,
  virtual: PropTypes.bool,
  height: PropTypes.number,
  itemHeight: PropTypes.number,
};

export default ListConfigured;
