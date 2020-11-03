import React, { Component } from "react";
import PropTypes from "prop-types";
import { List as ListDHX, DataCollection } from "dhx-suite";

class ListEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.list = new ListDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
			height: 400,
			editable: true,
		});
		this.list.data.load(`${process.env.PUBLIC_URL}/static/list.json`);

		this.list.events.on("click", id => this.setState({ event: "click", id }));
		this.list.events.on("doubleclick", id => this.setState({ event: "doubleclick", id }));
		this.list.events.on("focuschange", id => this.setState({ event: "focuschange", id }));
		this.list.events.on("beforeDrag", () => this.setState({ event: "beforeDrag" }));
		this.list.events.on("beforeDrop", () => this.setState({ event: "beforeDrop" }));
		this.list.events.on("dragStart", () => this.setState({ event: "dragStart" }));
		this.list.events.on("afterDrag", () => this.setState({ event: "afterDrag" }));
		this.list.events.on("canDrop", () => this.setState({ event: "canDrop" }));
		this.list.events.on("cancelDrop", () => this.setState({ event: "cancelDrop" }));
		this.list.events.on("afterDrop", () => this.setState({ event: "afterDrop" }));
		this.list.events.on("dragOut", () => this.setState({ event: "dragOut" }));
		this.list.events.on("dragIn", () => this.setState({ event: "dragIn" }));
		this.list.events.on("beforeSelect", () => this.setState({ event: "beforeSelect" }));
		this.list.events.on("afterSelect", () => this.setState({ event: "afterSelect" }));
		this.list.events.on("beforeUnSelect", () => this.setState({ event: "beforeUnSelect" }));
		this.list.events.on("afterUnSelect", () => this.setState({ event: "afterUnSelect" }));
		this.list.events.on("beforeEditStart", () => this.setState({ event: "beforeEditStart" }));
		this.list.events.on("afterEditStart", () => this.setState({ event: "afterEditStart" }));
		this.list.events.on("beforeEditEnd", () => this.setState({ event: "beforeEditEnd" }));
		this.list.events.on("afterEditEnd", () => this.setState({ event: "afterEditEnd" }));
		this.list.events.on("itemRightClick", () => this.setState({ event: "itemRightClick" }));
		this.list.events.on("itemMouseOver", () => this.setState({ event: "itemMouseOver" }));
	}
	componentWillUnmount() {
		this.list && this.list.destructor();
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
				<div style={{ height: 400, width: 400 }} ref={el => (this.el = el)}></div>
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

ListEvents.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
	virtual: PropTypes.bool,
	height: PropTypes.number,
	itemHeight: PropTypes.number,
	multiselection: PropTypes.bool || PropTypes.oneOf(["click", "ctrlClick"]),
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf(["target", "source", "both"]),
	dragCopy: PropTypes.bool,
};

export default ListEvents;
