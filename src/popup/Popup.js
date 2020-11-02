import React, { Component } from "react";
import PropTypes from "prop-types";
import { Popup as PopupDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Popup extends Component {
	componentDidMount() {
		this.popup = new PopupDHX({
			css: "dhx_widget--bordered",
		});
		this.popup.attachHTML(
			"<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>"
		);
	}
	handlePopupShow(el) {
		this.popup.show(el);
	}
	componentWillUnmount() {
		this.popup && this.popup.destructor();
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

Popup.propTypes = {
	css: PropTypes.string,
};

export default Popup;
