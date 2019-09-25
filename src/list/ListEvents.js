import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List as ListDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ListEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      id: ''
    }
  }

  componentDidMount() {
    this.list = new ListDHX(this.el, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`, 
      height: 300
    });
    this.list.data.load('static/dataview.json')

    this.list.events.on('click', id => this.setState({event: 'click', id: id}))
    this.list.events.on('contextmenu', id => this.setState({event: 'contextmenu', id: id}))
    this.list.events.on('focuschange', id => this.setState({event: 'focuschange', id: id}))
    this.list.events.on('doubleClick', id => this.setState({event: 'doubleClick', id: id}))
  }

  componentWillUnmount() {
    this.list.destructor();
  }

  render() {
    return (
      <div style = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <div ref={el => this.el = el}></div>
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button button--bordered">{this.state.event ? `Event: ${this.state.event}` : 'Click to widget'}</button>
          <button className="button button--bordered">Item: {this.state.id ? this.state.id : ''}</button>
        </div>
      </div>
    );
  }
}

ListEvents.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(DataCollection)
  ]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
  css: PropTypes.string,
  virtual: PropTypes.bool,
  height: PropTypes.number,
  itemHeight: PropTypes.number,
};

export default ListEvents;
