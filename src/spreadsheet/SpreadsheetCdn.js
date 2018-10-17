import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fromCDN from "from-cdn";

class Spreadsheet extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/spreadsheet/3.0/spreadsheet.js",
      "https://cdn.dhtmlx.com/spreadsheet/3.0/spreadsheet.css"
    ]);
  }

  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
      this.spreadsheet = new dhx.Spreadsheet(this.el, {
        menu: this.props.menu,
        editLine: this.props.editLine,
        toolbar: this.props.toolbar,
        rowsCount: this.props.rowsCount,
        colsCount: this.props.colsCount
      });

    });
  }
  componentWillUnmount() {
    this.spreadsheet.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el} className="widget-box" style={{ width: 800, height:400 }}></div>
    );
  }
}
Spreadsheet.propTypes = {
  menu: PropTypes.bool,
  editLine: PropTypes.bool,
  toolbar: PropTypes.array,
  rowsCount: PropTypes.number,
  colsCount: PropTypes.number
};

export default Spreadsheet;
