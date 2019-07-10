import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class ToolbarConfigured extends Component {
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
  componentWillUnmount() {
    this.toolbar.destructor();
  }
  render() {
    return (
      <div 
        style = {{width: '100%'}}
        ref = {el => this.el = el} > 
      </div>
    );
  }
}

ToolbarConfigured.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default ToolbarConfigured;
