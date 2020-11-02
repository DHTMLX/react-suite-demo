import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ribbon as RibbonDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class RibbonEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.ribbon = new RibbonDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
		});
		this.ribbon.data.load(`${process.env.PUBLIC_URL}/static/ribbon.json`);

		this.ribbon.events.on("inputcreated", id => this.setState({ event: "inputcreated", id: id }));
		this.ribbon.events.on("inputfocus", id => this.setState({ event: "inputfocus", id: id }));
		this.ribbon.events.on("inputblur", id => this.setState({ event: "inputblur", id: id }));
		this.ribbon.events.on("click", id => this.setState({ event: "click", id: id }));
		this.ribbon.events.on("openMenu", id => this.setState({ event: "openMenu", id: id }));
	}
	componentWillUnmount() {
		this.ribbon && this.ribbon.destructor();
	}
	render() {
		return (
			<div>
				<div ref={el => (this.el = el)}></div>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button button--bordered">{`Event: ${this.state.event}`}</button>
					<button className="button button--bordered">
						Item: {this.state.id ? this.state.id : ""}
					</button>
				</div>
			</div>
		);
	}
}

RibbonEvents.propTypes = {
	data: PropTypes.array,
	fields: PropTypes.array,
	fieldList: PropTypes.array,
};

export default RibbonEvents;
