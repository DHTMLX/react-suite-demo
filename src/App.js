import React, { Component } from 'react';
import { NavLink as Link, Route, Redirect } from "react-router-dom";
import './App.css';

import BasicSample from "./vault/BasicSample";
import DataSample from "./vault/DataSample";
import ConfigSample from "./vault/ConfigSample";
import CDNSample from "./vault/CDNSample";

import SpreadsheetBasicSample from "./spreadsheet/BasicSample";
import SpreadsheetDataSample from "./spreadsheet/DataSample";
import SpreadsheetConfigSample from "./spreadsheet/ConfigSample";
import SpreadsheetCDNSample from "./spreadsheet/CDNSample";

import RichtextBasicSample from "./richtext/BasicSample";
import RichtextDataSample from "./richtext/DataSample";

class App extends Component {
  render() {
    return (
      <div className='app-screen'>
        <div className='app-header'>
          <h1>Using DHTMLX widgets in a React app</h1>
        </div>
        <div className='app-page'>
          <div className='app-sidebar'>
            <h3>Vault</h3>
            <nav>
              <Link to="/basic">Basic usage</Link>
              <Link to="/data">Data / Events</Link>
              <Link to="/config">Pre-configured widget</Link>
              <Link to="/cdn">Load from CDN</Link>
            </nav>
            <h3>Spreadsheet</h3>
            <nav>
              <Link to="/spreadsheet/basic">Basic usage</Link>
              <Link to="/spreadsheet/data">Data / Events</Link>
              <Link to="/spreadsheet/config">Pre-configured widget</Link>
              <Link to="/spreadsheet/cdn">Load from CDN</Link>
            </nav>
            <h3>Richtext</h3>
            <nav>
              <Link to="/richtext/basic">Basic usage</Link>
              <Link to="/richtext/data">Data / Events</Link>
            </nav>
          </div>
          <div className='app-content'>
            <Route path="/basic" component={BasicSample} />
            <Route path="/data" component={DataSample} />
            <Route path="/config" component={ConfigSample} />
            <Route path="/cdn" component={CDNSample} />

            <Route path="/spreadsheet/basic" component={SpreadsheetBasicSample} />
            <Route path="/spreadsheet/data" component={SpreadsheetDataSample} />
            <Route path="/spreadsheet/config" component={SpreadsheetConfigSample} />
            <Route path="/spreadsheet/cdn" component={SpreadsheetCDNSample} />

            <Route path="/richtext/basic" component={RichtextBasicSample} />
            <Route path="/richtext/data" component={RichtextDataSample} />

            <Route exact path="/" render={() => (
              <Redirect to="/basic" />
            )} />
            <Route exact path="/spreadsheet/" render={() => (
              <Redirect to="/spreadsheet/basic" />
            )} />
            <Route exact path="/richtext/" render={() => (
              <Redirect to="/richtext/basic" />
            )} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
