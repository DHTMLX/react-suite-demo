import React, { Component } from 'react';
import { NavLink as Link, Route, Redirect } from "react-router-dom";
import './App.css';

import BasicSample from "./vault/BasicSample";
import DataSample from "./vault/DataSample";
import ConfigSample from "./vault/ConfigSample";
import CDNSample from "./vault/CDNSample";

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
          </div>
          <div className='app-content'>
            <Route path="/basic" component={BasicSample}/>
            <Route path="/data" component={DataSample}/>
            <Route path="/config" component={ConfigSample}/>
            <Route path="/cdn" component={CDNSample}/>
            <Route exact path="/" render={() => (
              <Redirect to="/basic"/>
            )}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
