import React, { Component } from "react";
import PropTypes from "prop-types";
import { Vault as VaultBase } from "dhx-vault";
import "dhx-vault/codebase/vault.css";

class Vault extends Component {
	componentDidMount() {
		this.vault = new VaultBase(this.el, {
			data: this.props.data,
			mode: this.props.mode,
			uploader: {
				autosend: this.props.autosend,
				target: this.props.target
			},
			toolbar: this.props.toolbar
		});
	}
	componentWillUnmount() {
		this.vault && this.vault.destructor();
	}
	render() {
		return (
			<div ref={el => this.el = el} className="widget-box"></div>
		);
	}
}

Vault.propTypes = {
	data: PropTypes.array,
	mode: PropTypes.string,
	autosend: PropTypes.bool,
	target: PropTypes.any,
	toolbar: PropTypes.bool
};

export default Vault;
