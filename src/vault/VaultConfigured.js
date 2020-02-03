import React, { Component } from "react";
import { Vault as VaultBase } from "dhx-vault";
import "dhx-vault/codebase/vault.css";

class Vault extends Component {
	componentDidMount() {
		this.vault = new VaultBase(this.el, {
			mode: "grid"
		});
		this.vault.data.parse([
			{name: "myfile_12.png", size: 32420},
			{name: "myfile_13.png", size: 55674},
			{name: "myfile_14.png", size: 12440},
			{name: "info.doc", size: 243441}
		]);

		this.vault.toolbar.data.add({
			value: "MyAction"
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

export default Vault;
