
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class ComboboxCDN extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
			this.el && (this.combobox = new dhx.Combobox(this.el, {
        placeholder: "Click to choose"
      }));
      this.combobox && this.combobox.data.load(`${process.env.PUBLIC_URL}/static/combobox.json`)
      if (this.props.ready) {
        this.props.ready(this.combobox);
			}
    });
  }
  componentWillUnmount() {
    if (this.combobox) {
			this.combobox.destructor();
		}
  }
  render() {
    return (
      <div style={{minWidth: 400 }} ref={el => this.el = el}></div>
    );
  }
}
ComboboxCDN.propTypes = {
  data: PropTypes.instanceOf([
    PropTypes.array,
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
export default ComboboxCDN;
