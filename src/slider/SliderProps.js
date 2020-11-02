import React, { Component } from "react";
import PropTypes from "prop-types";
import { Slider as SliderDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Slider extends Component {
	componentDidMount() {
		let { min, max, step, tooltip, tick, majorTick, tickTemplate } = this.props;
		this.slider = new SliderDHX(this.el, {
			min: min,
			max: max,
			step: step,
			tooltip: tooltip,
			tick: tick,
			majorTick: majorTick,
			tickTemplate: tickTemplate,
		});
	}
	componentWillUnmount() {
		this.slider.destructor();
	}
	render() {
		return <div style={{ width: "600px" }} ref={el => (this.el = el)}></div>;
	}
}

class SliderProps extends Component {
	render() {
		return (
			<Slider min={0} max={100} step={1} tooltip={true} tick={1} majorTick={10} tickTemplate={v => v} />
		);
	}
}

SliderProps.propTypes = {
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

export default SliderProps;
