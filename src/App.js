import React, { PureComponent } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import "dhx-suite/codebase/suite.css";

import { isEqual } from 'lodash';

import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import About from './About'

import CalendarPage from './calendar/CalendarPage';
import ToolbarPage from './toolbar/ToolbarPage';
import TimepickerPage from './timepicker/TimepickerPage';
import SliderPage from './slider/SliderPage';
import ColorpickerPage from './colorpicker/ColorpickerPage';

// import BasicSample from "./vault/BasicSample";
// import DataSample from "./vault/DataSample";
// import ConfigSample from "./vault/ConfigSample";
// import CDNSample from "./vault/CDNSample";

// import SpreadsheetBasicSample from "./spreadsheet/BasicSample";
// import SpreadsheetDataSample from "./spreadsheet/DataSample";
// import SpreadsheetConfigSample from "./spreadsheet/ConfigSample";
// import SpreadsheetCDNSample from "./spreadsheet/CDNSample";

// import RichtextBasicSample from "./richtext/BasicSample";
// import RichtextDataSample from "./richtext/DataSample";
// import RichtextConfigSample from "./richtext/ConfigSample";
// import RichtextCDNSample from "./richtext/CDNSample";

class App extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
      activeWidget: "",
      toolbarNav: [], 
    }
  }
  componentDidMount() {
    let idFromUrlHash = window.location.hash.slice(1)
    setTimeout(() => {
      if (this.el && this.state.toolbarNav.includes(idFromUrlHash)) {
        this.setActiveExapmle(idFromUrlHash)
        const itemsToHide = ['basic_link', 'cdn_link', 'pre_link', 'props_link', 'events_link', 'data_link']
		  	itemsToHide.map(item => {
				  this.toolbar.toolbar.data.update(item, {active: false})
          return null
        })
        this.toolbar.toolbar.data.update(idFromUrlHash + '_link', {active: true})
      } 
    }, 600);
  }
  
  setActiveWidget(activeWidget) {
    this.setState({
      activeWidget: activeWidget.charAt(0).toUpperCase() + activeWidget.slice(1)
    })
    this.el && this.el.scrollTo({
      top: 0,
      behavior: 'smooth',
      inline: 'center',
     });
  }
  setToolBarNavItems(array) {
    if (!isEqual(array, this.state.toolbarNav)) {
      this.setState({
        toolbarNav: array
      })
    }
  }
  setActiveExapmle(id) {
    let elHash = "#" + id
    const el = this.el.querySelector(elHash);
    const mainY = el.getBoundingClientRect().top + this.el.scrollTop;
    
		this.el.scrollTo({
				top: mainY - 57,
        behavior: 'smooth',
        inline: 'center',
    });

    let toolbarNavItems = [...this.el.querySelectorAll('section')]
		toolbarNavItems.map(item => {
      item.classList.remove('active')
      if (id === item.id) {
        item.classList.add('active')
      }
      return null
    })
    window.history.replaceState(undefined, undefined, elHash)
  }
  render() {
    return (
      <div className='app-screen' style={{minHeight: '100vh', display: 'flex'}}>
        <Sidebar handleActiveWidgetChange={(activeWidget) => this.setActiveWidget(activeWidget)}/>
        <div className="app-screen__inner"  style={{flexBasis: 'auto', flexGrow: 1}}>
          <Toolbar 
            ref={(el) => this.toolbar = el} 
            activeWidget={this.state.activeWidget}  
            scrollToExample={(id) => this.setActiveExapmle(id)} 
            toolbarNav={this.state.toolbarNav}/>
          <div className='app-content' 
            ref={(el) => this.el = el} 
            style={{maxHeight: 'calc(100vh - 57px)', overflow: 'auto'}}>
            <Route path="/calendar" component={() => (
              <CalendarPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/toolbar" component={() => (
              <ToolbarPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/timepicker" component={() => (
              <TimepickerPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/slider" component={() => (
              <SliderPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/colorpicker" component={() => (
              <ColorpickerPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route exact path="/" render={() => (
              <About handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}/>
              )} 
            />
            
            {/* <Route path="/basic" component={BasicSample} />
            <Route path="/data" component={DataSample} />
            <Route path="/config" component={ConfigSample} />
            <Route path="/cdn" component={CDNSample} />

            <Route path="/spreadsheet/basic" component={SpreadsheetBasicSample} />
            <Route path="/spreadsheet/data" component={SpreadsheetDataSample} />
            <Route path="/spreadsheet/config" component={SpreadsheetConfigSample} />
            <Route path="/spreadsheet/cdn" component={SpreadsheetCDNSample} />

            <Route path="/richtext/basic" component={RichtextBasicSample} />
            <Route path="/richtext/data" component={RichtextDataSample} />
            <Route path="/richtext/config" component={RichtextConfigSample} />
            <Route path="/richtext/cdn" component={RichtextCDNSample} /> */}
            {/* <h3>Vault</h3>
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
                <Link to="/richtext/config">Pre-configured widget</Link>
                <Link to="/richtext/cdn">Load from CDN</Link>
              </nav> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

