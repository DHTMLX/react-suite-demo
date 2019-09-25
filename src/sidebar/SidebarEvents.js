import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Sidebar as SidebarDHX, TreeCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";


class SidebarEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      id: ''
    }
  }

  componentDidMount() {
    this.sidebar = new SidebarDHX(this.el, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    });
    this.sidebar.data.load('./static/sidebar.json')

    this.sidebar.events.on('toggle', id => this.setState({event: 'toggle', id: id}))
    this.sidebar.events.on('openmenu', id => this.setState({event: 'openmenu', id: id}))
    this.sidebar.events.on('click', id => this.setState({event: 'click', id: id}))
  }

  componentWillUnmount() {
    this.sidebar && this.sidebar.destructor();
  }

  render() {
    return (
      <div>
        <div ref={el => this.el = el} style={{display: 'flex', justifyContent: 'center'}}></div>
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button button--bordered">{`Event: ${this.state.event}`}</button>
          <button className="button button--bordered">Item: {this.state.id ? this.state.id : ''}</button>
        </div>
      </div>
    );
  }
}

SidebarEvents.propTypes = {
  css: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  collapsed: PropTypes.bool, 
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default SidebarEvents;
