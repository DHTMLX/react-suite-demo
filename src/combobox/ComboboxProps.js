import React, { Component } from "react";
import PropTypes from "prop-types";
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Combobox extends Component {
	componentDidMount() {
		let {
			multiselection,
			label,
			data,
			labelInline,
			labelWidth,
			selectAllButton,
			required,
			showItemsCount,
			virtual,
			placeholder
		} = this.props;
		this.combobox = new ComboboxDHX(this.el, {
			data: data,
			multiselection: multiselection,
			label: label,
			labelInline: labelInline,
			labelWidth: labelWidth,
			selectAllButton: selectAllButton,
			required: required,
			showItemsCount: showItemsCount,
			virtual: virtual,
			placeholder: placeholder
		});
	}
	componentWillUnmount() {
		this.combobox && this.combobox.destructor();
	}
	render() {
		return (
			<div style={{minWidth: 400, textAlign: "left"}} ref={el => this.el = el}></div>
		);
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
				labelInline={false}
				labelWidth={150}
				selectAllButton={true}
				required={true}
				showItemsCount={true}
				virtual={true}
				placeholder={"Click to choose"}
			/>
		);
	}
}

ComboboxProps.propTypes = {
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
	css: PropTypes.string
};

export default ComboboxProps;
