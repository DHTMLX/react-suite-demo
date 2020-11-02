import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class ColorpickerCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css",
		]);
	}
	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.colorpicker = new dhx.Colorpicker(this.el, {
				css: "dhx_widget--bordered",
			});

			if (this.props.ready) this.props.ready(this.colorpicker);
		});
	}
	componentWillUnmount() {
		if (this.colorpicker) this.colorpicker.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

ColorpickerCDN.propTypes = {
	css: PropTypes.string,
	grayShades: PropTypes.bool,
	pickerOnly: PropTypes.bool,
	paletteOnly: PropTypes.bool,
	customColors: PropTypes.string,
	palette: PropTypes.array,
	width: PropTypes.string,
	mode: PropTypes.oneOf(["palette", "picker"]),
};

export default ColorpickerCDN;
