import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar as ToolbarDHX, message, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Toolbar extends Component {
  componentDidMount() {
    this.toolbar = new ToolbarDHX(this.el, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      data: [
      {
        id: "add",
        icon: "dxi dxi-plus",
        value: "Add"
      },
      {
        type: "separator"
      },
      {
        id: "language",
        value: "Language",
        items: [{
            id: "eng",
            value: "English"
          },
          {
            id: "spa",
            value: "Spanish"
          },
          {
            id: "rus",
            value: "Russian"
          },
          {
            id: "de",
            value: "Deutsch"
          }
        ]
      },
      {
        id: "skin",
        value: "Skin",
        items: [{
            id: "material",
            value: "Material"
          },
          {
            id: "skyblue",
            value: "Skyblue"
          },
          {
            id: "web",
            value: "Web"
          },
          {
            id: "terrace",
            value: "Terrace"
          },
        ]
      },
      {
        type: "separator"
      },
      {
        id: "edit",
        value: "Edit"
      },
      {
        id: "search",
        type: "input",
        placeholder: "Search",
        icon: "dxi dxi-magnify"
      },
      {
        type: "spacer"
      }]
    });
  }

  handleClick(id) {
    message({position: "top-right", expire: 3000, text:  `"Click id: ${id}`, icon: "dxi dxi-close" });
  }

  componentWillUnmount() {
    this.toolbar.destructor();
  }

  render() {
    return (
      <div 
        style = {{width: '100%'}}
        onClick = {(item) => this.handleClick(item.target.getAttribute("dhx_id"))}
        ref = {el => this.el = el} > 
      </div>
    );
  }
}
class ToolbarEvents extends Component {
  handleClick(item) {
    console.log(item)
  }
  render() {
    return (
      <Toolbar/> 
    )
  }
}

ToolbarEvents.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default ToolbarEvents;
