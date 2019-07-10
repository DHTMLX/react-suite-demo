import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class ToolbarCdn extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
      this.toolbar = new dhx.Toolbar(this.el, {
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
      if (this.props.ready)
        this.props.ready(this.toolbar);
    });
  }
  componentWillUnmount() {
    if (this.toolbar)
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
ToolbarCdn.propTypes = {
  css: PropTypes.string,
  data: PropTypes.array,
};
export default ToolbarCdn;
