import React, { Component } from 'react';
import fromCDN from "from-cdn";

class RichtextComponent extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/richtext/3.0/richtext.js",
      "https://cdn.dhtmlx.com/richtext/3.0/richtext.css"
    ]);
  }

  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
      this.richtext = new dhx.Richtext(this.el);
    });
  }
  componentWillUnmount() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  }
  render() {
    return (
      <div ref={el => this.el = el} className="widget-box" style={{ width: 800, height: 400 }}></div>
    );
  }
}
export default RichtextComponent;
