import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TreeGrid as TreegridDHX, TreeGridCollection } from "dhx-suite";

import "dhx-suite/codebase/suite.min.css";

class Grid extends Component {
  componentDidMount() {
    let { rowHeight, columnsAutoWidth, fitToContainer, columns, data } = this.props
    this.grid = new TreegridDHX(this.el, {
      rowHeight: rowHeight,
      columnsAutoWidth: columnsAutoWidth,
      fitToContainer: fitToContainer,
      columns: columns,
      data: data
    })
  }

  componentWillUnmount() {
    this.grid.destructor();
  }
  render() {
    return (
      <div style={{width: '100%', maxWidth: 1350, height: '500px'}} ref={el => this.el = el}></div>
    );
  }
} 

class GridData extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      firstItem: null,
      itemsCount: 0
    }
    this.data = new TreeGridCollection()

    this.data.events.on('load', () => {
      this.setState({
        firstItem: this.data.getItem(this.data.getId(0)).name,
        itemsCount: this.data.getLength()
      })
    })

    this.data.load('./static/treegrid.json').then(() => {
      this.data.events.on('change', () => {
        this.setState({
          firstItem: this.data.getItem(this.data.getId(0)) ? this.data.getItem(this.data.getId(0)).name : '',
          itemsCount: this.data.getLength()
        })
      })
    })
  }

  componentWillUnmount() {
    this.data.events.detach('load')
  }
  handleRemoveItem() {
    this.data.remove(this.data.getId(0))
  }
  handleReset() {
    this.data.load('./static/treegrid.json')
  }
  render() {
    const columns = [
      { width: 260, id: "name", header: [{ text: "Name" }] },
      { width: 260, id: "native", type: "string", header: [{ text: "Native name" }] },
      { width: 200, id: "capital", type: "string", header: [{ text: "Capital" }] },
      { width: 200, id: "currency", type: "string", header: [{ text: "Currency" }] }
    ]
    return ( 
      <div style={{width: '100%', maxWidth: 1350, height: '550px'}}>
        <Grid 
          rowHeight={60}
          columnsAutoWidth={true}
          fitToContainer={true}
          columns={columns}
          data={this.data}
        />
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button" onClick={() => this.handleRemoveItem()} disabled={this.state.itemsCount === 0}>
             Remove {this.state.firstItem} segment
          </button>
          <button className="button" onClick={() => this.handleReset()} disabled={this.state.itemsCount !== 0}>
            Reset 
          </button>
        </div>
      </div>
    );
  }
}
Grid.propTypes = {
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

export default GridData;