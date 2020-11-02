import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colorpicker as ColorpickerDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ColorpickerEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.colorpicker = new ColorpickerDHX(this.el, {
			css: "dhx_widget--bordered",
			value: new Date(),
		});

		this.colorpicker.events.on("change", id => this.setState({ event: "change", id: id }));
		this.colorpicker.events.on("apply", id => this.setState({ event: "apply", id: id }));
		this.colorpicker.events.on("cancelClick", id => this.setState({ event: "cancelClick", id: id }));
		this.colorpicker.events.on("modeChange", id => this.setState({ event: "modeChange", id: id }));
	}
	componentWillUnmount() {
		this.colorpicker.destructor();
	}
	render() {
		return (
			<div style={{ width: "100%" }}>
				<div
					style={{ width: "100%", display: "flex", justifyContent: "center" }}
					ref={el => (this.el = el)}
				></div>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button button--bordered">
						{this.state.event ? `Event: ${this.state.event}` : "Click to widget"}
					</button>
					<button className="button button--bordered">
						Item: {this.state.id ? this.state.id : ""}
					</button>
				</div>
			</div>
		);
	}
}

ColorpickerEvents.propTypes = {
	css: PropTypes.string,
	grayShades: PropTypes.bool,
	pickerOnly: PropTypes.bool,
	paletteOnly: PropTypes.bool,
	customColors: PropTypes.string,
	palette: PropTypes.array,
	width: PropTypes.string,
	mode: PropTypes.oneOf(["palette", "picker"]),
};

export default ColorpickerEvents;
