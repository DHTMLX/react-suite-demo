
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TreeGrid as TreegridDHX, TreeGridCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class TreegridConfigured extends Component {
  componentDidMount() {
    this.treegrid = new TreegridDHX(this.el, {
			css: "dhx_widget--bordered",
      width: 1020,
      height: 500,
      columns: [
        { width: 260, id: "name", header: [{ text: "Name" }] },
        { width: 260, id: "native", type: "string", header: [{ text: "Native name" }] },
        { width: 200, id: "capital", type: "string", header: [{ text: "Capital" }] },
        { width: 200, id: "currency", type: "string", header: [{ text: "Currency" }] }
      ],
    });
    this.treegrid.data.load('./static/treegrid.json')
  }
  componentWillUnmount() {
    this.treegrid.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
TreegridConfigured.propTypes = {
  columns: PropTypes.array,
	spans: PropTypes.array,
	data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(TreeGridCollection)
  ]),
	headerRowHeight: PropTypes.number,
	footerRowHeight: PropTypes.number,
	columnsAutoWidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
	rowHeight: PropTypes.number,
	type: PropTypes.oneOf([
    "tree"
  ]),
	width: PropTypes.number,
	height: PropTypes.number,
	headerSort: PropTypes.bool,
	rowCss: PropTypes.func,
	splitAt: PropTypes.number,
	selection: PropTypes.bool,

	fitToContainer: PropTypes.bool,
	css: PropTypes.string,

	$headerLevel: PropTypes.number,
	$footerLevel: PropTypes.number,
	$totalWidth: PropTypes.number,
	$totalHeight: PropTypes.number,
	$colspans: PropTypes.bool,
	$footer: PropTypes.bool,
};

export default TreegridConfigured;
