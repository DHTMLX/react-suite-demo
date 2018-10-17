import React, { Component } from 'react';
import Spreadsheet from "./SpreadsheetConfigured";


class BasicSample extends Component {
  render() {
    return (
      <div className='app-box'>
        <p>Pre-configured component</p>
        <Spreadsheet />
      </div>
    );
  }
}

export default BasicSample;
