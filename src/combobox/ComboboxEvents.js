import React, {Component} from "react";
import PropTypes from "prop-types";
import {Combobox as ComboboxDHX, DataCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ComboboxEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: ""
		};
	}

	componentDidMount() {
		this.combobox = new ComboboxDHX(this.el, {placeholder: "Click to choose"});
		this.combobox && this.combobox.data.load(`${process.env.PUBLIC_URL}/static/combobox.json`);

		this.combobox.events.on("change", id => this.setState({event: "change", id: id}));
		this.combobox.events.on("open", id => this.setState({event: "open", id: id}));
		this.combobox.events.on("close", id => this.setState({event: "close", id: id}));
	}

	componentWillUnmount() {
		this.combobox.destructor();
	}

	render() {
		return (
			<div style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column"
			}}>
				<div
					style={{maxWidth: 400, minWidth: 400}}
					ref={el => this.el = el}>
				</div>
				<div style={{display: "flex", justifyContent: "center", padding: 20}}>
					<button
						className="button button--bordered">{this.state.event ? `Event: ${this.state.event}` : "Click to widget"}</button>
					<button className="button button--bordered">Item: {this.state.id ? this.state.id : ""}</button>
				</div>
			</div>
		);
	}
}

ComboboxEvents.propTypes = {
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

export default ComboboxEvents;
