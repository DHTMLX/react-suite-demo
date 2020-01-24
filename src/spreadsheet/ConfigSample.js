import React, {Component} from "react";
import SpreadsheetComponent from "./SpreadsheetConfigured";

class ConfigSample extends Component {
	render() {
		return (
			<div className='app-box'>
				<p>Pre-configured component</p>
				<SpreadsheetComponent/>
			</div>
		);
	}
}

export default ConfigSample;
