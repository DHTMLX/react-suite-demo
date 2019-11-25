
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Combobox extends PureComponent {
  componentDidMount() {
    this.combobox = new ComboboxDHX(this.el, {
      placeholder: "Click to choose"
    })
    this.combobox && this.combobox.data.load(`${process.env.PUBLIC_URL}/static/combobox.json`)
  }
  componentWillUnmount() {
    this.combobox.destructor();
  }
  render() {
    return (
      <div style={{minWidth: 400}} ref={el => this.el = el}></div>
    );
  }
}
Combobox.propTypes = {
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

export default Combobox;
