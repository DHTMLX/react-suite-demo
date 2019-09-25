import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TreeGrid as TreegridDHX, TreeGridCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";


class TreeEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      id: ''
    }
  }

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

    this.treegrid.events.on('itemcontextmenu', id => this.setState({event: 'itemcontextmenu', id: id}))
    this.treegrid.events.on('itemdblclick', id => this.setState({event: 'itemdblclick', id: id}))
    this.treegrid.events.on('itemclick', id => this.setState({event: 'itemclick', id: id}))
  }

  componentWillUnmount() {
    this.treegrid && this.treegrid.destructor();
  }

  render() {
    return (
      <div>
        <div ref={el => this.el = el}></div>
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button button--bordered">{`Event: ${this.state.event}`}</button>
          <button className="button button--bordered">Item: {this.state.id ? this.state.id : ''}</button>
        </div>
      </div>
    );
  }
}

TreeEvents.propTypes = {
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

export default TreeEvents;
