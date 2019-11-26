
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DataView as DataviewDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

const template = (item) => (
  `<div class='item_wrap item-wrap--grid'>
    <img class='image' style="max-width: 150px" src="${process.env.PUBLIC_URL + '/static/' + item.img}" />
    <h2 class='title'>${item.title}</h2>
    <div>${item.short}</div>
  </div>
  `
) 

class DataviewConfigured extends Component {
  componentDidMount() {
    this.dataview = new DataviewDHX(this.el, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      itemsInRow: 6,
      template: template,
      gap: 20,
      keyNavigation: true
    });
    this.dataview.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`)
  }
  componentWillUnmount() {
    this.dataview.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
DataviewConfigured.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(DataCollection)
  ]),
	itemsInRow: PropTypes.number,
	gap: PropTypes.number,
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
};

export default DataviewConfigured;
