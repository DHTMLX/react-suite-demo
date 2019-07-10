import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar as ToolbarDHX , TreeCollection} from "dhx-suite";

class Toolbar extends Component {
  componentDidMount() {
    let {css} = this.props
    this.calendar = new ToolbarDHX(this.el, {
      css: css,
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
    })
  }
  componentWillUnmount() {
    this.calendar.destructor();
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

class ToolbarProps extends Component {
  render() {
    return (
      <Toolbar 
        css={"dhx_widget--bordered"}
      />
    );
  }
}
ToolbarProps.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default ToolbarProps;
