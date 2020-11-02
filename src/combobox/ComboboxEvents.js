import React, { Component } from "react";
import PropTypes from "prop-types";
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ComboboxEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.combobox = new ComboboxDHX(this.el, {
			placeholder: "Click to choose",
		});
		this.combobox && this.combobox.data.load(`${process.env.PUBLIC_URL}/static/combobox.json`);

		this.combobox.events.on("change", id => this.setState({ event: "change", id: id }));
		this.combobox.events.on("open", id => this.setState({ event: "open", id: id }));
		this.combobox.events.on("input", value => this.setState({ event: "input", id: value }));
		this.combobox.events.on("afterClose", () => this.setState({ event: "afterClose" }));
		this.combobox.events.on("beforeClose", () => this.setState({ event: "beforeClose" }));
	}
	componentWillUnmount() {
		this.combobox && this.combobox.destructor();
	}
	render() {
		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<div style={{ width: 400 }} ref={el => (this.el = el)}></div>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button button--bordered">
						{this.state.event ? `Event: ${this.state.event}` : "Click to widget"}
					</button>
					<button className="button button--bordered">
						Item: {this.state.id ? this.state.id : ""}
					</button>
				</div>
			</div>
		);
	}
}

ComboboxEvents.propTypes = {
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

export default ComboboxEvents;
