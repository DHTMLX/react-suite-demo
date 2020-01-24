import React, {Component} from "react";
import PropTypes from "prop-types";
import {Layout as LayoutDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Layout extends Component {
	componentDidMount() {
		let {css} = this.props;
		this.layout = new LayoutDHX(this.el, {
			css: css
		});
	}

	componentWillUnmount() {
		this.layout.destructor();
	}

	render() {
		return (
			<div ref={el => this.el = el}></div>
		);
	}
}

class LayoutProps extends Component {
	render() {
		return (
			<Layout
				css="dhx_widget--bordered"
			/>
		);
	}
}

LayoutProps.propTypes = {};

export default LayoutProps;
