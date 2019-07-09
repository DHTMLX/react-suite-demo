import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar as ToolbarDHX, message } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class ToolbarEvents extends Component {
  componentDidMount() {
    this.toolbar = new ToolbarDHX(this.el, {
      css: "dhx_widget--bordered",
      value: new Date(),
    });
    
    let events = [
      "change",
      "dateHover",
      "beforeChange"
    ];
    let counter = 1;

    events.forEach((event) =>  {
      this.toolbar.events.on(event, function () {
        message({position: "top-right", expire: 3000, text: getEvent(event), icon: "dxi dxi-close" });
      });
    });

    function getEvent(event, args) {
      return "Event " + counter++ + ": " + event
    }
  }
  componentWillUnmount() {
    this.toolbar.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
ToolbarEvents.propTypes = {
  
};

export default ToolbarEvents;
