import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class SliderCDN extends Component {
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
			this.slider = new dhx.Slider(this.el);

			if (this.props.ready) {
				this.props.ready(this.slider);
			}
		});
	}
	componentWillUnmount() {
		this.slider && this.slider.destructor();
	}
	render() {
		return <div style={{ width: "600px" }} ref={el => (this.el = el)}></div>;
	}
}

SliderCDN.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	mode: PropTypes.oneOf(["vertical", "horizontal"]),
	range: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
	inverse: PropTypes.bool,
	tooltip: PropTypes.bool,
	css: PropTypes.string,
	tick: PropTypes.number,
	tickTemplate: PropTypes.func,
	majorTick: PropTypes.number,
	label: PropTypes.string,
	required: PropTypes.bool,
	helpMessage: PropTypes.string,
	labelPosition: PropTypes.string,
	labelWidth: PropTypes.string,
	hiddenLabel: PropTypes.bool,
};

export default SliderCDN;
