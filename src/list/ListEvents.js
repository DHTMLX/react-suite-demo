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
		this.list.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);

		this.list.events.on("click", id => this.setState({ event: "click", id: id }));
		this.list.events.on("itemRightClick", id => this.setState({ event: "itemRightClick", id: id }));
		this.list.events.on("itemMouseOver", id => this.setState({ event: "itemMouseOver", id: id }));
		this.list.events.on("focusChange", id => this.setState({ event: "focusChange", id: id }));
		this.list.events.on("doubleClick", id => this.setState({ event: "doubleClick", id: id }));
		this.list.events.on("beforeEditStart", id => this.setState({ event: "beforeEditStart", id: id }));
		this.list.events.on("afterEditStart", id => this.setState({ event: "afterEditStart", id: id }));
		this.list.events.on("beforeEditEnd", () => this.setState({ event: "beforeEditEnd" }));
		this.list.events.on("afterEditEnd", () => this.setState({ event: "afterEditEnd" }));
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
