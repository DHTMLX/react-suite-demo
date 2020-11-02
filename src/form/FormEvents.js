import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form as FormDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class FormEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.form = new FormDHX(this.el, {
			css: "dhx_widget--bordered",
			title: "DHX Form",
			gravity: false,
			width: 400,
			rows: [
				{
					type: "input",
					label: "Name",
					icon: "dxi-magnify",
					placeholder: "John Doe",
					required: true,
					id: "name",
					name: "name",
				},
				{
					type: "datepicker",
					label: "Date",
					required: true,
					id: "date",
					name: "date",
				},
				{
					type: "timepicker",
					controls: "true",
					label: "Time",
					required: true,
					id: "time",
					name: "time",
				},
				{
					type: "colorpicker",
					label: "Color",
					required: true,
					id: "color",
					name: "color",
				},
				{
					type: "simpleVault",
					required: true,
					label: "Files",
					id: "simplevault",
					name: "simplevault",
				},
				{
					type: "button",
					value: "Send",
					size: "medium",
					view: "flat",
					submit: true,
					color: "primary",
				},
			],
		});
		this.form.events.on("change", id => this.setState({ event: "change", id: id }));
		this.form.events.on("buttonclick", id => this.setState({ event: "buttonclick", id: id }));
		this.form.events.on("validationfail", id => this.setState({ event: "validationfail", id: id }));
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
						Item: {this.state.id ? this.state.id : ""}
					</button>
				</div>
			</div>
		);
	}
}

FormEvents.propTypes = {
	css: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	rows: PropTypes.array,
	cols: PropTypes.array,
	title: PropTypes.string,
	align: PropTypes.oneOf(["start", "center", "end", "between", "around", "evenly"]),
	padding: PropTypes.string,
	gravity: PropTypes.bool,
	disabled: PropTypes.bool,
};

export default FormEvents;
