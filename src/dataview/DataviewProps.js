
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DataView as DataviewDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Dataview extends Component {
  componentDidMount() {
    let { css, itemsInRow, data, template, gap, keyNavigation } = this.props
    this.dataview = new DataviewDHX(this.el, {
      css: css,
      itemsInRow: itemsInRow,
      template: template,
      gap: gap,
      keyNavigation: keyNavigation,
      data: data
    })
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

class DataviewProps extends Component {
  getData() {
    const data = new DataCollection()
    data.load(`${process.env.PUBLIC_URL}/static/dataview.json`)
    return data
  }
  render() {
    const tempalte = (item) => (
      `<div class='item_wrap item-wrap--grid'>
        <img class='image' style="max-width: 150px" src="/static/${item.img}" />
        <h2 class='title'>${item.title}</h2>
        <div>${item.short}</div>
      </div>
      `
    )
    return (
      <Dataview 
				css="dhx_widget--bordered dhx_widget--bg_white"
        itemsInRow={6}
        template={tempalte}
        gap={20}
        keyNavigation={true}
        data={this.getData()}
      />
    );
  }
}
DataviewProps.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(DataCollection)
  ]),
	itemsInRow: PropTypes.number,
	gap: PropTypes.number,
	template: PropTypes.func,
	keyNavigation: PropTypes.func,
	css: PropTypes.string,
};

export default DataviewProps;
