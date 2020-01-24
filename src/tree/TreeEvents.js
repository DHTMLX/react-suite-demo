import React, {Component} from "react";
import PropTypes from "prop-types";
import {Tree as TreeDHX, TreeCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class TreeEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: ""
		};
	}

	componentDidMount() {
		this.tree = new TreeDHX(this.el, {
			css: "dhx_widget--bg_white"
		});
		this.tree.data.load(`${process.env.PUBLIC_URL}/static/tree.json`);

		this.tree.events.on("itemcontextmenu", id => this.setState({event: "itemcontextmenu", id: id}));
		this.tree.events.on("itemdblclick", id => this.setState({event: "itemdblclick", id: id}));
		this.tree.events.on("itemclick", id => this.setState({event: "itemclick", id: id}));
	}

	componentWillUnmount() {
		this.tree && this.tree.destructor();
	}

	render() {
		return (
			<div>
				<div ref={el => this.el = el} style={{maxWidth: 248, marginLeft: "auto", marginRight: "auto"}}></div>
				<div style={{display: "flex", justifyContent: "center", padding: 20}}>
					<button className="button button--bordered">{`Event: ${this.state.event}`}</button>
					<button className="button button--bordered">Item: {this.state.id ? this.state.id : ""}</button>
				</div>
			</div>
		);
	}
}

TreeEvents.propTypes = {
	data: PropTypes.instanceOf([
		PropTypes.array,
		PropTypes.instanceOf(TreeCollection)
	]),
	css: PropTypes.string,
	keyNavigation: PropTypes.bool,
	autoload: PropTypes.string,
	checkbox: PropTypes.bool,
	isFolder: PropTypes.func
};

export default TreeEvents;
