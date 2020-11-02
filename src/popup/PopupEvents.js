import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Popup as PopupDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class PivotEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
		};
	}
	componentDidMount() {
		this.popup = new PopupDHX({
			css: "dhx_widget--bordered",
		});
		this.popup.attachHTML(
			"<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>"
		);

		this.popup.events.on("afterhide", () => this.setState({ event: "afterhide" }));
		this.popup.events.on("aftershow", () => this.setState({ event: "aftershow" }));
		this.popup.events.on("beforehide", () => this.setState({ event: "beforerhide" }));
		this.popup.events.on("beforeshow", () => this.setState({ event: "beforeshow" }));
		this.popup.events.on("click", () => this.setState({ event: "click" }));
	}
	componentWillUnmount() {
		this.popup && this.popup.destructor();
	}
	handlePopupShow(el) {
		this.popup.show(el, { mode: "top", indent: 20 });
	}
	render() {
		return (
			<Fragment>
				<div>
					<button
						className="button"
						style={{ marginLeft: "auto", marginRight: "auto" }}
						ref={el => (this.el = el)}
						onClick={() => this.handlePopupShow(this.el)}
					>
						Show popup
					</button>
					<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
						<button className="button button--bordered">{`Event: ${this.state.event}`}</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

PivotEvents.propTypes = {
	css: PropTypes.string,
};

export default PivotEvents;
