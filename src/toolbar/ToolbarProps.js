import React, { Component } from "react";
import PropTypes from "prop-types";
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";

class Toolbar extends Component {
	componentDidMount() {
		let { css, data } = this.props;
		this.toolbar = new ToolbarDHX(this.el, {
			css: css,
			data: data,
			navigationType: "pointer",
		});
	}
	componentWillUnmount() {
		this.toolbar.destructor();
	}
	render() {
		return <div style={{ width: "100%" }} ref={el => (this.el = el)}></div>;
	}
}

class ToolbarProps extends Component {
	getData() {
		const data = new TreeCollection();
		data.load(`${process.env.PUBLIC_URL}/static/toolbar.json`);
		return data;
	}
	render() {
		return <Toolbar css={"dhx_widget--bordered dhx_widget--bg_white"} data={this.getData()} />;
	}
}

ToolbarProps.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	navigationType: PropTypes.string,
};

export default ToolbarProps;
