import React, { Component } from 'react';
import { Spreadsheet as SpreadsheetBase } from "dhx-spreadsheet";
import "dhx-spreadsheet/codebase/spreadsheet.css";

class Spreadsheet extends Component {
  componentDidMount() {
    this.spreadsheet = new SpreadsheetBase(this.el, {
      editLine: false
    });
    this.spreadsheet.parse([
      { cell: "A1", value: 10 },
      { cell: "B1", value: 20 }
    ]);

    this.spreadsheet.setStyle("A1", { background: "#F4D679" });
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

export default Spreadsheet;
