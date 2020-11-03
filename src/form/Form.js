import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form as FormDHX } from "dhx-suite";

import "@mdi/font/css/materialdesignicons.min.css";

class Form extends Component {
	componentDidMount() {
		this.form = new FormDHX(this.el, {
			css: "dhx_widget--bordered",
			width: 400,
			rows: [
				{
					type: "input",
					label: "Name",
					icon: "dxi-magnify",
					placeholder: "John Doe",
				},
				{
					type: "input",
					label: "Email",
					placeholder: "jd@mail.name",
				},
				{
					type: "input",
					inputType: "password",
					label: "Password",
					placeholder: "********",
				},
				{
					type: "checkbox",
					text: "I agree",
					name: "agree",
					value: "checkboxvalue",
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
	}
	componentWillUnmount() {
		this.form && this.form.destructor();
	}
	render() {
		return <form style={{ textAlign: "left", background: "#fff" }} ref={el => (this.el = el)}></form>;
	}
}

Form.propTypes = {
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

export default Form;
