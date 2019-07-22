
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class FormCDN extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.min.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
			this.form = new dhx.Form(this.el, {
        cellCss: "dhx_widget--bordered",
        gravity: false,
        rows: [
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
      });

      if (this.props.ready) {
        this.props.ready(this.form);
			}
    });
  }
  componentWillUnmount() {
    if (this.form) {
			this.form.destructor();
		}
  }
  render() {
    return (
      <form style={{textAlign: 'left'}} ref={el => this.el = el}></form>
    );
  }
}
FormCDN.propTypes = {
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
export default FormCDN;
