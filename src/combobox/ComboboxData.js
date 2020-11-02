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
			showItemsCount,
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
			showItemsCount: showItemsCount,
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

class ComboboxData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemForSelect: null,
		};
		this.data = new DataCollection();

		this.data.events.on("load", () => {
			this.setState({
				itemForSelect: this.data.getItem(this.data.getId(0)).value,
			});
		});
		this.data.load(`${process.env.PUBLIC_URL}/static/combobox.json`).then(() => {
			this.data.events.on("change", () => {
				this.setState({
					itemForSelect: this.data.getItem(this.data.getId(0)).value,
				});
			});
		});
	}
	componentWillUnmount() {
		this.data.events.detach("load");
	}
	handleClick() {
		this.data.map(() => this.data.update(this.data.getId(0), { $selected: true }));
	}
	render() {
		return (
			<div style={{ width: 400 }}>
				<Combobox
					data={this.data}
					multiselection={false}
					label={"DHX-react combobox"}
					labelPosition={"top"}
					labelWidth={150}
					selectAllButton={true}
					required={true}
					placeholder={"Click to choose"}
				/>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button" onClick={() => this.handleClick()}>
						Select {this.state.itemForSelect}
					</button>
				</div>
			</div>
		);
	}
}

Combobox.propTypes = {
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

export default ComboboxData;
