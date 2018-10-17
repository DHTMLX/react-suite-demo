import React, { Component } from 'react';
import Spreadsheet from "./SpreadsheetCdn";


class BasicSample extends Component {
  render() {
    return (
      <div className='app-box'>
        <p>Basic spreadsheet</p>
        <Spreadsheet></Spreadsheet>

        <hr />
        <p>Spreadsheet with menu</p>
        <Spreadsheet menu></Spreadsheet>

        <hr />
        <p>Minimal layout</p>
        <Spreadsheet editLine={false} ></Spreadsheet>
      </div>
    );
  }
}

export default BasicSample;
