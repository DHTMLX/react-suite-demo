import React, { Component } from "react";
import PropTypes from "prop-types";
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Combobox extends Component {
	componentDidMount() {
		const {
			multiselection,
			label,
			data,
			labelPosition,
			labelWidth,
			selectAllButton,
			required,
			itemsCount,
			placeholder,
		} = this.props;
		this.combobox = new ComboboxDHX(this.el, {
			data: data,
			multiselection: multiselection,
			label: label,
			labelPosition: labelPosition,
			labelWidth: labelWidth,
			selectAllButton: selectAllButton,
			required: required,
			itemsCount: itemsCount,
			placeholder: placeholder,
		});
	}
	componentWillUnmount() {
		this.combobox && this.combobox.destructor();
	}
	render() {
		return <div style={{ minWidth: 400, textAlign: "left" }} ref={el => (this.el = el)}></div>;
	}
}

class ComboboxProps extends Component {
	getData() {
		const data = new DataCollection();
		data.load(`${process.env.PUBLIC_URL}/static/combobox.json`);
		return data;
	}
	render() {
		return (
			<Combobox
				data={this.getData()}
				multiselection={true}
				label={"DHX-react combobox"}
				labelPosition={"top"}
				labelWidth={150}
				selectAllButton={true}
				required={true}
				itemsCount={true}
				placeholder={"Click to choose"}
			/>
		);
	}
}

ComboboxProps.propTypes = {
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

export default ComboboxProps;
