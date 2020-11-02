import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form as FormDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Form extends Component {
	componentDidMount() {
		const { css, rows, gravity, padding, title, width } = this.props;
		this.form = new FormDHX(this.el, {
			css: css,
			gravity: gravity,
			padding: padding,
			rows: rows,
			title: title,
			width: width,
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
		];
		return (
			<Form
				css={"dhx_widget--bordered"}
				width={400}
				rows={rows}
				gravity={false}
				padding={20}
				title={"DHX Form"}
			/>
		);
	}
}

FormProps.propTypes = {
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

export default FormProps;
