import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form as FormDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Form extends Component {
	componentDidMount() {
		const { css, rows, padding, title, width } = this.props;
		this.form = new FormDHX(this.el, {
			css,
			padding,
			rows,
			title,
			width,
		});
	}
	componentWillUnmount() {
		this.form && this.form.destructor();
	}
	render() {
		return <form style={{ textAlign: "left", background: "#fff" }} ref={el => (this.el = el)}></form>;
	}
}

class FormProps extends Component {
	render() {
		const rows = [
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
				text: "I agree",
				name: "agree",
				value: "checkboxvalue",
				required: true,
			},
			{
				type: "button",
				text: "Send",
				size: "medium",
				view: "flat",
				submit: true,
				color: "primary",
			},
		];
		return (
			<Form
				css={"dhx_widget--bordered"}
				width={400}
				rows={rows}
				padding={20}
				title={"DHX Form"}
			/>
		);
	}
}

FormProps.propTypes = {
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

export default FormProps;
