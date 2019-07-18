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
import SidebarPage from './sidebar/SidebarPage';
import RibbonPage from './ribbon/RibbonPage';
import DataviewPage from './dataview/DataviewPage';
import ListPage from './list/ListPage';
import GridPage from './grid/GridPage';
import MenuPage from './menu/MenuPage';
import FormPage from './form/FormPage';
import TabbarPage from './tabbar/TabbarPage';
import ComboboxPage from './combobox/ComboboxPage';
import TreePage from './tree/TreePage';
import TreegridPage from './treegrid/TreegridPage';
import ChartPage from './chart/ChartPage';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeWidget: "",
      toolbarNav: [], 
    }
  }
  componentDidMount() {
    console.log('app componentDidMount')
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
            <Route path="/sidebar" component={() => (
              <SidebarPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/ribbon" component={() => (
              <RibbonPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/dataview" component={() => (
              <DataviewPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/list" component={() => (
              <ListPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/grid" component={() => (
              <GridPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/menu" component={() => (
              <MenuPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/form" component={() => (
              <FormPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/tabbar" component={() => (
              <TabbarPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/combobox" component={() => (
              <ComboboxPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/tree" component={() => (
              <TreePage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/treegrid" component={() => (
              <TreegridPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route path="/chart" component={() => (
              <ChartPage 
                handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                setActiveExapmle = {id => this.setActiveExapmle(id)}
                />
              )}
            />
            <Route exact path="/" render={() => (
              <About handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}/>
              )} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

