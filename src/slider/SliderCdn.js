
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class SliderCDN extends Component {
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
			this.slider = new dhx.Slider(this.el, {
      });

      if (this.props.ready)
        this.props.ready(this.slider);
    });
  }
  componentWillUnmount() {
    if (this.slider)
		this.slider.destructor();
  }
  render() {
    return (
      <div style={{width: "100%"}} ref={el => this.el = el}></div>
    );
  }
}
SliderCDN.propTypes = {
};
export default SliderCDN;
