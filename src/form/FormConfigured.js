import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form as FormDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class FormConfigured extends Component {
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
				},
				{
					type: "input",
					label: "Email",
					placeholder: "jd@mail.name",
					preMessage: "Enter Email",
					errorMessage: "Invalid email",
					successMessage: "Valid Email",
					validation: "email",
					required: true,
				},
				{
					type: "input",
					inputType: "password",
					label: "Password",
					placeholder: "********",
					required: true,
				},
				{
					type: "checkbox",
					label: "I agree",
					name: "agree",
					labelInline: true,
					value: "checkboxvalue",
					required: true,
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
	}
	componentWillUnmount() {
		this.form && this.form.destructor();
	}
	render() {
		return <form style={{ textAlign: "left", background: "#fff" }} ref={el => (this.el = el)}></form>;
	}
}

FormConfigured.propTypes = {
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

export default FormConfigured;
