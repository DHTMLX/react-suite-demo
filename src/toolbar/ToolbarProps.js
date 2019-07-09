import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar as ToolbarDHX } from "dhx-suite";

class Toolbar extends Component {
  componentDidMount() {
    let {css} = this.props
    this.calendar = new ToolbarDHX(this.el, {
      css: css,
    })
  }
  componentWillUnmount() {
    this.calendar.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
} 

class ToolbarProps extends Component {
  render() {
    return (
      <Toolbar 
        css={"dhx_widget--bordered"}
      />
    );
  }
}
ToolbarProps.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
	date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
	css: PropTypes.string,
	mark: PropTypes.func,
	block: PropTypes.func,
	weekStart: PropTypes.oneOf(["monday", "sunday"]),
	weekNumbers: PropTypes.bool,
  view: PropTypes.oneOf(["calendar", "year", "month", "timepicker"]),
	timePicker: PropTypes.bool,
	dateFormat: PropTypes.string,
	timeFormat: PropTypes.oneOf([24, 12]),
	thisMonthOnly: PropTypes.bool,
	width: PropTypes.string,
};

export default ToolbarProps;
