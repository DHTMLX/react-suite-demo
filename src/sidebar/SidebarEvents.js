import React, { Component } from "react";
import PropTypes from "prop-types";
import { Sidebar as SidebarDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class SidebarEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.sidebar = new SidebarDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
		});
		this.sidebar.data.load(`${process.env.PUBLIC_URL}/static/sidebar.json`);

		this.sidebar.events.on("openMenu", id => this.setState({ event: "openMenu", id: id }));
		this.sidebar.events.on("inputFocus", id => this.setState({ event: "inputFocus", id: id }));
		this.sidebar.events.on("inputCreated", id => this.setState({ event: "inputCreated", id: id }));
		this.sidebar.events.on("inputBlur", id => this.setState({ event: "inputBlur", id: id }));
		this.sidebar.events.on("beforeHide", id => this.setState({ event: "beforeHide", id: id }));
		this.sidebar.events.on("beforeExpand", id => this.setState({ event: "beforeExpand", id: id }));
		this.sidebar.events.on("beforeCollapse", id => this.setState({ event: "beforeCollapse", id: id }));
		this.sidebar.events.on("afterHide", () => this.setState({ event: "afterHide" }));
		this.sidebar.events.on("afterExpand", id => this.setState({ event: "afterExpand", id: id }));
		this.sidebar.events.on("afterCollapse", id => this.setState({ event: "afterCollapse", id: id }));
		this.sidebar.events.on("click", id => this.setState({ event: "click", id: id }));
	}
	componentWillUnmount() {
		this.sidebar && this.sidebar.destructor();
	}
	render() {
		return (
			<div>
				<div ref={el => (this.el = el)} style={{ display: "flex", justifyContent: "center" }}></div>
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

SidebarEvents.propTypes = {
	css: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	collapsed: PropTypes.bool,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
};

export default SidebarEvents;
