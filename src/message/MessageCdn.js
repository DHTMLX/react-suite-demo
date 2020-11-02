import React, { Component } from "react";
import fromCDN from "from-cdn";

class MessageCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css",
		]);
	}
	showAlert = () => {
		this.ready.then(() => {
			window.dhx.alert({
				header: "DHTMLX Alert Box",
				text:
					"With the help of DHTMLX components you are able to create versatile user interfaces for web apps of any kind. Modern technologies and design make our library a great tool for developers working on the most complex projects. And here dhtmlxMessage represents a small but indispensable toolkit of helpers for initializing all types of messages: notifications, alert and confirmation boxes, and tooltips. Try out the abilities of dhtmlxMessage in our interactive demos and samples.",
				buttonsAlignment: "center",
				buttons: ["ok"],
			});
		});
	};
	showConfirm = () => {
		this.ready.then(() => {
			window.dhx.confirm({
				header: "DHTMLX Confirm Box",
				text:
					"With the help of DHTMLX components you are able to create versatile user interfaces for web apps of any kind. Modern technologies and design make our library a great tool for developers working on the most complex projects. And here dhtmlxMessage represents a small but indispensable toolkit of helpers for initializing all types of messages: notifications, alert and confirmation boxes, and tooltips. Try out the abilities of dhtmlxMessage in our interactive demos and samples.",
				buttonsAlignment: "center",
			});
		});
	};
	showMessage = () => {
		this.ready.then(() => {
			window.dhx.message({
				text: "Here is dhtmlxMessage",
				icon: "dxi-close",
			});
		});
	};
	render() {
		return (
			<div style={{ display: "flex" }}>
				<button className="button" onClick={() => this.showAlert()}>
					Show alert
				</button>
				<button className="button" onClick={() => this.showConfirm()}>
					Show confirm
				</button>
				<button className="button" onClick={() => this.showMessage()}>
					Show message
				</button>
			</div>
		);
	}
}

MessageCDN.propTypes = {};
export default MessageCDN;
