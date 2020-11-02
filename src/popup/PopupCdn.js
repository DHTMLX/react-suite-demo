import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class PopupCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css",
		]);
	}
	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.popup = new dhx.Popup({
				css: "dhx_widget--bordered",
			});
			this.popup.attachHTML(
				"<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>"
			);
			if (this.props.ready) {
				this.props.ready(this.popup);
			}
		});
	}
	componentWillUnmount() {
		this.popup && this.popup.destructor();
	}
	handlePopupShow(el) {
		this.popup.show(el);
	}
	render() {
		return (
			<div>
				<button
					className="button"
					ref={el => (this.el = el)}
					onClick={() => this.handlePopupShow(this.el)}
				>
					Show popup
				</button>
			</div>
		);
	}
}

PopupCDN.propTypes = {
	css: PropTypes.string,
};

export default PopupCDN;
