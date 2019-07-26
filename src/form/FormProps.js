
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as FormDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Form extends Component {
  componentDidMount() {
    let { cellCss, rows, gravity, padding, title } = this.props
    this.form = new FormDHX(this.el, {
      cellCss: cellCss,
      gravity: gravity,
      padding: padding,
      rows: rows,
      title: title,
    })
  }
  componentWillUnmount() {
    this.form && this.form.destructor();
  }
  render() {
    return (
      <form style={{textAlign: 'left'}} ref={el => this.el = el}></form>
    );
  }
} 

class FormProps extends Component {
  render() {
    const rows = [
      {
        type: "input",
        label: "Name",
        icon: "dxi-magnify",
        placeholder: "John Doe"
      },
      {
        type: "input",
        label: "Email",
        placeholder: "jd@mail.name"
      },
      {
        type: "input",
        inputType: "password",
        label: "Password",
        placeholder: "********"
      },
      {	
        type: "checkbox",
        label: "I agree",
        name: "agree",
        labelInline: true,
        value: "checkboxvalue",
      },
      {
        type: "button",
        value: "Send",
        size: "medium",
        view: "flat",
        submit: true,
        color: "primary"
      },
    ]
    return (
      <Form 
				cellCss={"dhx_widget--bordered"}
        rows={rows}
        gravity={false}
        padding={20}
        title={'DHX form'}
      />
    );
  }
}
FormProps.propTypes = {
  cellCss: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	rows: PropTypes.array,
	cols: PropTypes.array,
	groupName: PropTypes.string,
	size: PropTypes.number,
	title: PropTypes.string,
	items: PropTypes.array,
	align: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "between",
    "around",
    "evenly",
  ]),
	padding: PropTypes.string,
	gravity: PropTypes.bool,
};

export default FormProps;
