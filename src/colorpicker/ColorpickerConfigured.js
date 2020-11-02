import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colorpicker as ColorpickerDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ColorpickerConfigured extends Component {
	componentDidMount() {
		this.colorpicker = new ColorpickerDHX(this.el, {
			css: "dhx_widget--bordered",
			paletteOnly: true,
			grayShades: true,
			pickerOnly: true,
		});
	}
	componentWillUnmount() {
		this.colorpicker.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

ColorpickerConfigured.propTypes = {
	css: PropTypes.string,
	grayShades: PropTypes.bool,
	pickerOnly: PropTypes.bool,
	paletteOnly: PropTypes.bool,
	customColors: PropTypes.string,
	palette: PropTypes.array,
	width: PropTypes.string,
	mode: PropTypes.oneOf(["palette", "picker"]),
};

export default ColorpickerConfigured;
