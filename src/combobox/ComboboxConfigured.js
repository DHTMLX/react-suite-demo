
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ComboboxConfigured extends Component {
  componentDidMount() {
    this.combobox = new ComboboxDHX(this.el, {
      multiselection: true,
      label: "DHX-react combobox",
      labelInline: false,
      labelWidth: 150,
      selectAllButton: true,
      required: true,
      showItemsCount: true,
      virtual: true,
      placeholder: "Click to choose"
    });
    this.combobox.data.load('./static/combobox.json')
  }
  componentWillUnmount() {
    // this.combobox.destructor();
  }
  render() {
    return (
      <div style={{minWidth: 400, textAlign: 'left'}} ref={el => this.el = el}></div>
    );
  }
}
ComboboxConfigured.propTypes = {
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(DataCollection)
  ]),
  readonly: PropTypes.bool,
	disabled: PropTypes.bool,
	template: PropTypes.func,
	filter: PropTypes.func,
	multiselection: PropTypes.bool,
	label: PropTypes.string,
	labelInline: PropTypes.bool,
	labelWidth: PropTypes.string,
	placeholder: PropTypes.string,
	selectAllButton: PropTypes.bool,
	showItemsCount: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ]),
	cellHeight: PropTypes.number,
	virtual: PropTypes.bool,
	listHeight: PropTypes.number,
	required: PropTypes.bool,
	help: PropTypes.string,
	hiddenLabel: PropTypes.bool,
	css: PropTypes.string,
};

export default ComboboxConfigured;
