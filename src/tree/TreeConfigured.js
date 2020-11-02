import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class TreeConfigured extends Component {
	componentDidMount() {
		this.tree = new TreeDHX(this.el, {
			css: "dhx_widget--bg_white",
			keyNavigation: true,
			checkbox: true,
		});
		this.tree.data.load(`${process.env.PUBLIC_URL}/static/tree.json`);
	}
	componentWillUnmount() {
		this.tree && this.tree.destructor();
	}
	render() {
		return (
			<div
				style={{ width: 350, padding: 10, background: "#fff", height: 450, overflow: "auto" }}
				ref={el => (this.el = el)}
			></div>
		);
	}
}

TreeConfigured.propTypes = {
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

export default TreeConfigured;
