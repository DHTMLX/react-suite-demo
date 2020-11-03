import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form as FormDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class FormEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			name: "",
		};
	}
	componentDidMount() {
		this.form = new FormDHX(this.el, {
			css: "dhx_widget--bordered",
			title: "DHX Form",
			width: 400,
			rows: [
				{
					type: "input",
					label: "Name",
					icon: "dxi-magnify",
					placeholder: "John Doe",
					required: true,
					name: "name",
				},
				{
					type: "datepicker",
					label: "Date",
					required: true,
					name: "date",
				},
				{
					type: "timepicker",
					controls: "true",
					label: "Time",
					required: true,
					name: "time",
				},
				{
					type: "colorpicker",
					label: "Color",
					required: true,
					name: "color",
				},
				{
					type: "simpleVault",
					required: true,
					label: "Files",
					name: "simplevault",
				},
				{
					type: "button",
					text: "Send",
					size: "medium",
					view: "flat",
					submit: true,
					color: "primary",
				},
			],
		});
		this.form.events.on("change", name => this.setState({ event: "change", name }));
		this.form.events.on("click", name => this.setState({ event: "click", name }));
		this.form.events.on("beforeHide", name => this.setState({ event: "beforeHide", name }));
		this.form.events.on("afterHide", name => this.setState({ event: "afterHide", name }));
		this.form.events.on("beforeShow", name => this.setState({ event: "beforeShow", name }));
		this.form.events.on("afterShow", name => this.setState({ event: "afterShow", name }));
		this.form.events.on("beforeValidate", name => this.setState({ event: "beforeValidate", name }));
		this.form.events.on("afterValidate", name => this.setState({ event: "afterValidate", name }));
		this.form.events.on("beforeChangeProperties", name => this.setState({ event: "beforeChangeProperties", name }));
		this.form.events.on("afterChangeProperties", name => this.setState({ event: "afterChangeProperties", name }));
		this.form.events.on("afterSend", () => this.setState({ event: "afterSend" }));
		this.form.events.on("beforeSend", () => this.setState({ event: "beforeSend" }));
	}
	componentWillUnmount() {
		this.form && this.form.destructor();
	}
	render() {
		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<form style={{ textAlign: "left", background: "#fff" }} ref={el => (this.el = el)}></form>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button button--bordered">
						{this.state.event ? `Event: ${this.state.event}` : "Click to widget"}
					</button>
					<button className="button button--bordered">
						Item: {this.state.name ? this.state.name : ""}
					</button>
				</div>
			</div>
		);
	}
}

FormEvents.propTypes = {
	css: PropTypes.string,
	width: PropTypes.string || PropTypes.number,
	height: PropTypes.string || PropTypes.number,
	rows: PropTypes.array,
	cols: PropTypes.array,
	title: PropTypes.string,
	align: PropTypes.oneOf(["start", "center", "end", "between", "around", "evenly"]),
	padding: PropTypes.string || PropTypes.number,
	disabled: PropTypes.bool,
};

export default FormEvents;
