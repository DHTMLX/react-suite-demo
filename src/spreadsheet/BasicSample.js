import React, { Component } from 'react';
import SpreadsheetComponent from "./Spreadsheet";


class BasicSample extends Component {
  render() {
    return (
      <div className='app-box'>
        <p>Basic spreadsheet</p>
        <SpreadsheetComponent></SpreadsheetComponent>

        <hr />
        <p>Spreadsheet with menu</p>
        <SpreadsheetComponent menu></SpreadsheetComponent>

        <hr />
        <p>Minimal layout</p>
        <SpreadsheetComponent editLine={false} ></SpreadsheetComponent>
      </div>
    );
  }
}

export default BasicSample;
