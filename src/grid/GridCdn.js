
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class GridCDN extends Component {
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
      this.grid = new dhx.Grid(this.el, {
        columns: [
          { width: 200, id: "country", header: [{ text: "Country" }] },
          { width: 125, id: "population", header: [{ text: "Population" }] },
          { width: 125, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
          { width: 125, id: "netChange", header: [{ text: "Net Change" }] },
          { width: 125, id: "destiny", header: [{ text: "Density (P/Km²)" }] },
          { width: 125, id: "area", header: [{ text: "Land Area (Km²)" }] },
          { width: 125, id: "migrants", header: [{ text: "Migrants (net)" }] },
          { width: 125, id: "fert", header: [{ text: "Fert. Rate" }] },
          { width: 125, id: "age", header: [{ text: "Med. Age" }] },
          { width: 125, id: "urban", header: [{ text: "Urban Pop" }] }
        ],
      });
      this.grid.data.load(`${process.env.PUBLIC_URL}/static/grid.json`)

      if (this.props.ready) {
        this.props.ready(this.grid);
			}
    });
  }
  componentWillUnmount() {
    if (this.grid) {
			this.grid.destructor();
		}
  }
  render() {
    return (
      <div style={{width: '100%', maxWidth: 1350, height: '500px'}} ref={el => this.el = el}></div>
    );
  }
}
GridCDN.propTypes = {
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
export default GridCDN;
