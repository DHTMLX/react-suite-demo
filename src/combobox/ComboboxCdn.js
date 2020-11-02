import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class ComboboxCDN extends Component {
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
			this.el &&
				(this.combobox = new dhx.Combobox(this.el, {
					placeholder: "Click to choose",
				}));
			this.combobox && this.combobox.data.load(`${process.env.PUBLIC_URL}/static/combobox.json`);
			if (this.props.ready) {
				this.props.ready(this.combobox);
			}
		});
	}
	componentWillUnmount() {
		this.combobox && this.combobox.destructor();
	}
	render() {
		return <div style={{ width: 400 }} ref={el => (this.el = el)}></div>;
	}
}

ComboboxCDN.propTypes = {
	data: PropTypes.instanceOf([PropTypes.array]),
	readonly: PropTypes.bool,
	disabled: PropTypes.bool,
	template: PropTypes.func,
	filter: PropTypes.func,
	multiselection: PropTypes.bool,
	selectAllButton: PropTypes.bool,
	itemsCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
	listHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	itemHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	labelWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	label: PropTypes.string,
	labelPosition: PropTypes.oneOf(["left", "top"]),
	hiddenLabel: PropTypes.bool,
	helpMessage: PropTypes.string,
	placeholder: PropTypes.string,
	css: PropTypes.string,
	required: PropTypes.bool,
	virtual: PropTypes.bool,
};

export default ComboboxCDN;
