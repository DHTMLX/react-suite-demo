import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class TreeCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css",
		]);
	}
	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.tree = new dhx.Tree(this.el, {
				css: "dhx_widget--bg_white",
			});
			this.tree.data.load(`${process.env.PUBLIC_URL}/static/tree.json`);
			if (this.props.ready) {
				this.props.ready(this.tree);
			}
		});
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

TreeCDN.propTypes = {
	data: PropTypes.instanceOf([PropTypes.array]),
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

export default TreeCDN;
