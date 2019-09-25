
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TreeGrid as TreegridDHX, TreeGridCollection} from "dhx-treegrid";
import "dhx-treegrid/codebase/treegrid.min.css";

class Treegrid extends Component {
  componentDidMount() {
    let { rowHeight, columnsAutoWidth, fitToContainer, columns, data } = this.props
    this.treegrid = new TreegridDHX(this.el, {
      rowHeight: rowHeight,
      columnsAutoWidth: columnsAutoWidth,
      fitToContainer: fitToContainer,
      columns: columns,
      data: data
    })
  }
  componentWillUnmount() {
    if (this.treegrid) {
      this.treegrid.destructor();
    }
  }
  render() {
    return (
      <div style={{width: 900, height: 500}} ref={el => this.el = el}></div>
    );
  }
} 

class TreegridProps extends Component {
  constructor() {
    super()
  }
  getData = () => {
    const data = new TreeGridCollection()
    data.load('./static/treegrid.json')
    return data
  }
  render() {
    const columns = [
      { width: 260, id: "name", header: [{ text: "Name" }] },
      { width: 260, id: "native", type: "string", header: [{ text: "Native name" }] },
      { width: 200, id: "capital", type: "string", header: [{ text: "Capital" }] },
      { width: 200, id: "currency", type: "string", header: [{ text: "Currency" }] }
    ]
    return (
      <Treegrid 
        rowHeight={60}
        columnsAutoWidth={true}
        fitToContainer={true}
        columns={columns}
        data={this.getData()}
				css="dhx_widget--bordered"
      />
    );
  }
}
TreegridProps.propTypes = {
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

export default TreegridProps;
