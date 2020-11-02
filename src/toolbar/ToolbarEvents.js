import React, { Component } from "react";
import PropTypes from "prop-types";
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";

class ToolbarEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.toolbar = new ToolbarDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			navigationType: "pointer",
			data: [
				{
					id: "add",
					icon: "dxi dxi-plus",
					value: "Add",
				},
				{
					type: "separator",
				},
				{
					id: "language",
					value: "Language",
					items: [
						{
							id: "eng",
							value: "English",
						},
						{
							id: "spa",
							value: "Spanish",
						},
						{
							id: "rus",
							value: "Russian",
						},
						{
							id: "de",
							value: "Deutsch",
						},
					],
				},
				{
					id: "skin",
					value: "Skin",
					items: [
						{
							id: "material",
							value: "Material",
						},
						{
							id: "skyblue",
							value: "Skyblue",
						},
						{
							id: "web",
							value: "Web",
						},
						{
							id: "terrace",
							value: "Terrace",
						},
					],
				},
				{
					type: "separator",
				},
				{
					id: "edit",
					value: "Edit",
				},
				{
					id: "search",
					type: "input",
					placeholder: "Search",
					icon: "dxi dxi-magnify",
				},
				{
					type: "spacer",
				},
			],
		});
		this.toolbar.events.on("click", id => this.handleClick(id, "click"));
		this.toolbar.events.on("inputCreated", id => this.handleClick(id, "inputCreated"));
		this.toolbar.events.on("openMenu", id => this.handleClick(id, "openmenu"));
		this.toolbar.events.on("inputFocus", id => this.handleClick(id, "inputFocus"));
		this.toolbar.events.on("inputBlur", id => this.handleClick(id, "inputBlur"));
		this.toolbar.events.on("afterHide", id => this.handleClick(id, "afterHide"));
		this.toolbar.events.on("beforeHide", id => this.handleClick(id, "beforeHide"));
	}
	handleClick(id, event) {
		this.setState({
			event: event,
			id: id,
		});
	}
	componentWillUnmount() {
		this.toolbar.destructor();
	}
	render() {
		return (
			<div style={{ width: "100%" }}>
				<div style={{ width: "100%" }} ref={el => (this.el = el)}></div>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button button--bordered">{`Event: ${this.state.event}`}</button>
					<button className="button button--bordered">
						Item: {this.state.id ? this.state.id : ""}
					</button>
				</div>
			</div>
		);
	}
}

ToolbarEvents.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	navigationType: PropTypes.string,
};

export default ToolbarEvents;
