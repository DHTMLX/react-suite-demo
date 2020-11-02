import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colorpicker as ColorpickerDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Colorpicker extends Component {
	componentDidMount() {
		this.colorpicker = new ColorpickerDHX(this.el, {
			css: "dhx_widget--bordered",
		});
	}
	componentWillUnmount() {
		this.colorpicker.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

Colorpicker.propTypes = {
	css: PropTypes.string,
	grayShades: PropTypes.bool,
	pickerOnly: PropTypes.bool,
	paletteOnly: PropTypes.bool,
	customColors: PropTypes.string,
	palette: PropTypes.array,
	width: PropTypes.string,
	mode: PropTypes.oneOf(["palette", "picker"]),
};

export default Colorpicker;
