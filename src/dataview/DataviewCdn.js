
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

const template = (item) => (
  `<div class='item_wrap item-wrap--grid'>
    <img class='image' style="max-width: 150px" src="/static/${item.img}" />
    <h2 class='title'>${item.title}</h2>
    <div>${item.short}</div>
  </div>
  `
) 

class DataviewCDN extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
			this.dataview = new dhx.DataView(this.el, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
        template: template,
        itemsInRow: 4,
      });
      this.dataview.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`)
      if (this.props.ready) {
        this.props.ready(this.dataview);
      }
    });
  }
  componentWillUnmount() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
DataviewCDN.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
  ]),
	itemsInRow: PropTypes.number,
	gap: PropTypes.number,
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
};
export default DataviewCDN;
