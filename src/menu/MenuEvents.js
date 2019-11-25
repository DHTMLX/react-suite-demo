import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class MenuEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      id: ''
    }
  }

  componentDidMount() {
    this.menu = new MenuDHX(this.el, {
      css: "dhx_widget--bordered",
    });
    this.menu.data.load(`${process.env.PUBLIC_URL}/static/menu.json`)

    this.menu.events.on('click', id => this.handleClick(id, 'click'))
    this.menu.events.on('openmenu', id => this.handleClick(id, 'openmenu'))
  }

  handleClick(id, event) {
    this.setState({
      event: event,
      id: id,
    })
  }

  componentWillUnmount() {
    this.menu.destructor();
  }

  render() {
    return (
      <div style = {{width: '100%', display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{width: '100%', maxWidth: 1200}} ref={el => this.el = el}></div>
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button button--bordered">{`Event: ${this.state.event}`}</button>
          <button className="button button--bordered">Item:  {this.state.id ? this.state.id : ''}</button>
        </div>
      </div>
    );
  }
}

MenuEvents.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default MenuEvents;
