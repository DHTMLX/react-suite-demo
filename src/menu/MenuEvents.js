import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";

class MenuEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.menu = new MenuDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
		});
		this.menu.data.load(`${process.env.PUBLIC_URL}/static/menu.json`);

		this.menu.events.on("click", id => this.setState({ event: "click", id: id }));
		this.menu.events.on("openmenu", id => this.setState({ event: "openmenu", id: id }));
		this.menu.events.on("inputfocus", () => this.setState({ event: "inputfocus" }));
		this.menu.events.on("inputcreated", () => this.setState({ event: "inputcreated" }));
		this.menu.events.on("inputblur", () => this.setState({ event: "inputblur" }));
		this.menu.events.on("afterhide", () => this.setState({ event: "afterhide" }));
		this.menu.events.on("beforehide", () => this.setState({ event: "beforehid" }));
	}
	componentWillUnmount() {
		this.menu && this.menu.destructor();
	}
	render() {
		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<div style={{ width: "100%", maxWidth: 1200 }} ref={el => (this.el = el)}></div>
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

MenuEvents.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	navigationType: PropTypes.oneOf(["pointer", "click"]),
};

export default MenuEvents;
