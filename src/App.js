import React, { PureComponent } from 'react';
import { Route, HashRouter, Switch } from "react-router-dom";
import './App.css';
import "dhx-suite/codebase/suite.min.css";

import { isEqual } from 'lodash';

import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import Dataview from './Dataview'

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
// import TreegridPage from './treegrid/TreegridPage';
import ChartPage from './chart/ChartPage';
// import LayoutPage from './layout/LayoutPage';
import WindowPage from './window/WindowPage';
import MessagePage from './message/MessagePage';
import PopupPage from './popup/PopupPage';
import PivotPage from './pivot/PivotPage';
import TreegridPage from './treegrid/TreegridPage';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      toolbarNav: [], 
      activeExampleId: "" 
    }
  }
  componentDidUpdate() {
    let activeHrefPart = window.location.href.split('/').pop()
    let activeHrefPartCapitalize = activeHrefPart.charAt(0).toUpperCase() + activeHrefPart.slice(1)
    if(this.state.activeWidget !== activeHrefPartCapitalize) {
      this.setState({
        activeWidget: activeHrefPartCapitalize
      })
    }
  }
  componentDidMount() {
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
    const mainY = el.getBoundingClientRect().top + this.el.querySelector('main').scrollTop;
    this.el.querySelector('main').scrollTo({
        top: mainY - 57,
        behavior: 'smooth',
        inline: 'center',
    });
  }
  render() {
    return (
      <HashRouter hashType={'slash'}>
        <div className='app-screen' style={{minHeight: '100vh', maxHeight: '100vh', display: 'flex', overflow: "hidden"}}>
          <Sidebar activeWidget={this.state.activeWidget} handleActiveWidgetChange={(activeWidget) => this.setActiveWidget(activeWidget)}/>
          <div className="app-screen__inner"  style={{flexBasis: 'auto', flexGrow: 1}}>
            <Toolbar 
              // ref={(el) => this.toolbar = el} 
              activeWidget={this.state.activeWidget}  
              activeExampleId={this.state.activeExampleId}
              scrollToExample={(id) => this.setActiveExapmle(id)} 
              toolbarNav={this.state.toolbarNav}/>
            <div className='app-content' 
              ref={(el) => this.el = el} >
              
                <Switch>
                <Route path={`/calendar`} component={() => (
                  <CalendarPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver)=> this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/toolbar`} component={() => (
                  <ToolbarPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/timepicker`} component={() => (
                  <TimepickerPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/slider`} component={() => (
                  <SliderPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/colorpicker`} component={() => (
                  <ColorpickerPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/sidebar`} component={() => (
                  <SidebarPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/ribbon`} component={() => (
                  <RibbonPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/dataview`} component={() => (
                  <DataviewPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/list`} component={() => (
                  <ListPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/grid`} component={() => (
                  <GridPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/menu`} component={() => (
                  <MenuPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/form`} component={() => (
                  <FormPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/tabbar`} component={() => (
                  <TabbarPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/combobox`} component={() => (
                  <ComboboxPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/tree`} component={() => (
                  <TreePage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/chart`} component={() => (
                  <ChartPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/window`} component={() => (
                  <WindowPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/message`} component={() => (
                  <MessagePage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/popup`} component={() => (
                  <PopupPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/pivot`} component={() => (
                  <PivotPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route path={`/treegrid`} component={() => (
                  <TreegridPage 
                    handleToolbarNavItems={(array) => this.setToolBarNavItems(array)}
                    setActiveExapmle = {(id, formObserver) => this.setActiveExapmle(id, formObserver)}
                    />
                  )}
                />
                <Route exact path={`/`} render={() => (
                  <Dataview handleActiveWidgetChange={(activeWidget) => this.setActiveWidget(activeWidget)}/>
                )} 
                />
                </Switch>
              
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

