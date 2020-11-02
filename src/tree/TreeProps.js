import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Tree extends Component {
	componentDidMount() {
		let { css, data, keyNavigation, checkbox } = this.props;
		this.tree = new TreeDHX(this.el, {
			css: css,
			keyNavigation: keyNavigation,
			checkbox: checkbox,
			data: data,
		});
	}
	componentWillUnmount() {
		this.tree.destructor();
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

class TreeProps extends Component {
	getData() {
		const data = new TreeCollection();
		data.load(`${process.env.PUBLIC_URL}/static/tree.json`);
		return data;
	}
	render() {
		return (
			<Tree css={"dhx_widget--bg_white"} keyNavigation={true} checkbox={true} data={this.getData()} />
		);
	}
}

TreeProps.propTypes = {
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

export default TreeProps;
