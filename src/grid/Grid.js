
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid as GridDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Grid extends Component {
  componentDidMount() {
    this.grid = new GridDHX(this.el, {
      columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "population", header: [{ text: "Population" }] },
        { width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
        { width: 150, id: "netChange", header: [{ text: "Net Change" }] },
        { width: 150, id: "destiny", header: [{ text: "Density (P/Km²)" }] },
        { width: 150, id: "area", header: [{ text: "Land Area (Km²)" }] },
        { width: 150, id: "migrants", header: [{ text: "Migrants (net)" }] },
        { width: 150, id: "fert", header: [{ text: "Fert. Rate" }] },
        { width: 150, id: "age", header: [{ text: "Med. Age" }] },
        { width: 150, id: "urban", header: [{ text: "Urban Pop" }] }
      ],
    });
    this.grid.data.load('./static/grid.json')
  }
  componentWillUnmount() {
    this.grid.destructor();
  }
  render() {
    return (
      <div style={{width: '100%', height: '500px'}} ref={el => this.el = el}></div>
    );
  }
}
Grid.propTypes = {
  columns: PropTypes.array,
	spans: PropTypes.array,
	data: PropTypes.array,
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

export default Grid;
