import React, {Component} from "react";
import RichtextComponent from "./RichtextCDN";

class CDNSample extends Component {
	render() {
		return (
			<div className='app-box'>
				<p>Code for Richtext on this page is loaded through CDN on demand</p>
				<p>You can use promise or event to catch the moment when UI is ready to load the data</p>
				<RichtextComponent></RichtextComponent>
			</div>
		);
	}
}

export default CDNSample;
