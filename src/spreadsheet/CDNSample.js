import React, { Component } from 'react';
import SpreadsheetComponent from "./SpreadsheetCdn";


class CDNSample extends Component {
  render() {
    return (
      <div className='app-box'>
        <p>Code for spreadsheet on this page is loaded through CDN on demand</p>
        <p>You can use promise or event to catch the moment when UI is ready to load the data</p>
        <SpreadsheetComponent></SpreadsheetComponent>
      </div>
    );
  }
}

export default CDNSample;
