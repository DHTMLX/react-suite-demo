import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class TreeEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.tree = new TreeDHX(this.el, {
			css: "dhx_widget--bg_white",
		});
		this.tree.data.load(`${process.env.PUBLIC_URL}/static/tree.json`);

		this.tree.events.on("itemRightClick", id => this.setState({ event: "itemRightClick", id: id }));
		this.tree.events.on("itemDblClick", id => this.setState({ event: "itemDblClick", id: id }));
		this.tree.events.on("itemClick", id => this.setState({ event: "itemClick", id: id }));
		this.tree.events.on("beforeExpand", id => this.setState({ event: "beforeExpand", id: id }));
		this.tree.events.on("beforeCollapse", id => this.setState({ event: "beforeCollapse", id: id }));
		this.tree.events.on("afterExpand", id => this.setState({ event: "afterExpand", id: id }));
		this.tree.events.on("afterCollapse", id => this.setState({ event: "afterCollapse", id: id }));
	}
	componentWillUnmount() {
		this.tree && this.tree.destructor();
	}
	render() {
		return (
			<div style={{ width: 350 }}>
				<div
					ref={el => (this.el = el)}
					style={{ width: 350, padding: 10, background: "#fff", height: 450, overflow: "auto" }}
				></div>
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

TreeEvents.propTypes = {
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	icon: PropTypes.shape({
		folder: PropTypes.string,
		openFolder: PropTypes.string,
		file: PropTypes.string,
	}),
	css: PropTypes.string,
	keyNavigation: PropTypes.bool,
	dragCopy: PropTypes.bool,
	dragMode: PropTypes.string,
	dropBehaviour: PropTypes.string,
	editable: PropTypes.bool,
	autoload: PropTypes.bool,
	checkbox: PropTypes.bool,
};

export default TreeEvents;
