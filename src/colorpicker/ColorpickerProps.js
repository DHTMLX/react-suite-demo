import React, {Component} from "react";
import PropTypes from "prop-types";
import {Colorpicker as ColorpickerDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Colorpicker extends Component {
	componentDidMount() {
		let {css, paletteOnly, grayShades, pickerOnly} = this.props;
		this.colorpicker = new ColorpickerDHX(this.el, {
			css: css,
			paletteOnly: paletteOnly,
			grayShades: grayShades,
			pickerOnly: pickerOnly
		});
	}

	componentWillUnmount() {
		this.colorpicker.destructor();
	}

	render() {
		return (
			<div ref={el => this.el = el}></div>
		);
	}
}

class ColorpickerProps extends Component {
	render() {
		return (
			<Colorpicker
				css="dhx_widget--bordered"
				paletteOnly={true}
				grayShades={true}
				pickerOnly={true}
			/>
		);
	}
}

ColorpickerProps.propTypes = {
	css: PropTypes.string,
	paletteOnly: PropTypes.bool,
	grayShades: PropTypes.bool,
	pickerOnly: PropTypes.bool,
	customColors: PropTypes.string,
	palette: PropTypes.array,
	width: PropTypes.string
};

export default ColorpickerProps;
