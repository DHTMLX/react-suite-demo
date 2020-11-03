import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class FormCDN extends Component {
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
			this.form = new dhx.Form(this.el, {
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
			if (this.props.ready) {
				this.props.ready(this.form);
			}
		});
	}
	componentWillUnmount() {
		this.form && this.form.destructor();
	}
	render() {
		return <form style={{ textAlign: "left", background: "#fff" }} ref={el => (this.el = el)}></form>;
	}
}

FormCDN.propTypes = {
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

export default FormCDN;
