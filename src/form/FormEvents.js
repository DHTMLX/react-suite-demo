import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as FormDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class FormEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      id: ''
    }
  }

  componentDidMount() {
    this.form = new FormDHX(this.el, {
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

    this.form.events.on('change', id => this.setState({event: 'change', id: id}))
    this.form.events.on('buttonclick', id => this.setState({event: 'buttonclick', id: id}))
    this.form.events.on('validationfail', id => this.setState({event: 'validationfail', id: id}))
  }

  componentWillUnmount() {
    this.form.destructor();
  }

  render() {
    return (
      <div style = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <form style={{textAlign: 'left'}} ref={el => this.el = el}></form>
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button button--bordered">{this.state.event ? `Event: ${this.state.event}` : 'Click to widget'}</button>
          <button className="button button--bordered">Item: {this.state.id ? this.state.id : ''}</button>
        </div>
      </div>
    );
  }
}

FormEvents.propTypes = {
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

export default FormEvents;
