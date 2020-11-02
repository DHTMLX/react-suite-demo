import React, { Component } from "react";
import PropTypes from "prop-types";
import { Slider as SliderDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class SliderEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.slider = new SliderDHX(this.el, {
			min: 0,
			max: 100,
			step: 1,
			thumbLabel: true,
			tick: 1,
			majorTick: 10,
			tickTemplate: v => v,
		});

		this.slider.events.on("change", id => this.setState({ event: "change", id: id }));
		this.slider.events.on("mousedown", id => this.setState({ event: "mousedown" }));
		this.slider.events.on("mouseup", id => this.setState({ event: "mouseup" }));
	}
	componentWillUnmount() {
		this.slider && this.slider.destructor();
	}
	render() {
		return (
			<div>
				<div ref={el => (this.el = el)} style={{ width: "600px", height: "50px" }}></div>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button button--bordered">{`Event: ${this.state.event}`}</button>
					<button className="button button--bordered">
						Item: {this.state.id ? this.state.id : ""}
					</button>
				</div>
			</div>
		);
	}
}

SliderEvents.propTypes = {
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

export default SliderEvents;
