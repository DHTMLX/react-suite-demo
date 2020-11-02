import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ribbon as RibbonDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class Ribbon extends Component {
	componentDidMount() {
		let { css, data } = this.props;
		this.ribbon = new RibbonDHX(this.el, {
			css: css,
			data: data,
		});
	}
	componentWillUnmount() {
		this.ribbon && this.ribbon.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

class RibbonProps extends Component {
	getData() {
		const data = new TreeCollection();
		data.load(`${process.env.PUBLIC_URL}/static/ribbon.json`);
		return data;
	}
	render() {
		return <Ribbon css="dhx_widget--bordered dhx_widget--bg_white" data={this.getData()} />;
	}
}

RibbonProps.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
};

export default RibbonProps;
