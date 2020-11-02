import React, { Component } from "react";
import PropTypes from "prop-types";
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ComboboxConfigured extends Component {
	componentDidMount() {
		this.combobox = new ComboboxDHX(this.el, {
			multiselection: true,
			label: "DHX-react combobox",
			labelPosition: "top",
			labelWidth: 150,
			selectAllButton: true,
			required: true,
			itemsCount: true,
			placeholder: "Click to choose",
		});
		this.combobox.data.load(`${process.env.PUBLIC_URL}/static/combobox.json`);
	}
	componentWillUnmount() {
		this.combobox && this.combobox.destructor();
	}
	render() {
		return <div style={{ width: 400, textAlign: "left" }} ref={el => (this.el = el)}></div>;
	}
}

ComboboxConfigured.propTypes = {
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
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

export default ComboboxConfigured;
