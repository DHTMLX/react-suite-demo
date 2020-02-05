import React, { Component } from "react";
import Vault from "./VaultConfigured";

class ConfigSample extends Component {
	render() {
		return (
			<div className='app-box'>
				<p>Pre-configured component</p>
				<Vault/>
			</div>
		);
	}
}

export default ConfigSample;
