import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";

class Menu extends Component {
	componentDidMount() {
		let { css, data } = this.props;
		this.menu = new MenuDHX(this.el, {
			css: css,
			data: data,
		});
	}
	componentWillUnmount() {
		this.menu && this.menu.destructor();
	}
	render() {
		return <div style={{ width: "100%", maxWidth: 1200 }} ref={el => (this.el = el)}></div>;
	}
}

class MenuProps extends Component {
	getData() {
		const data = new TreeCollection();
		data.load(`${process.env.PUBLIC_URL}/static/menu.json`);
		return data;
	}
	render() {
		return <Menu css="dhx_widget--bordered dhx_widget--bg_white" data={this.getData()} />;
	}
}

MenuProps.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	navigationType: PropTypes.oneOf(["pointer", "click"]),
};

export default MenuProps;
