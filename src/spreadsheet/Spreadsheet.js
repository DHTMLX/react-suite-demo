import React, { Component } from 'react';
import { Spreadsheet as SpreadsheetBase } from "dhx-spreadsheet";
import PropTypes from 'prop-types';
import "dhx-spreadsheet/codebase/spreadsheet.css";

class Spreadsheet extends Component {
  componentDidMount() {
    this.spreadsheet = new SpreadsheetBase(this.el, {
      menu: this.props.menu,
      editLine: this.props.editLine,
      toolbar: this.props.toolbar,
      rowsCount: this.props.rowsCount,
      colsCount: this.props.colsCount
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
