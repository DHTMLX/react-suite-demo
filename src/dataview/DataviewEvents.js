import React, {Component} from "react";
import PropTypes from "prop-types";
import {DataView as DataviewDHX, DataCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

const template = (item) => (
	`<div class='item_wrap item-wrap--grid'>
    <img class='image' style="max-width: 150px" src="${process.env.PUBLIC_URL + "/static/" + item.img}" />
    <h2 class='title'>${item.title}</h2>
    <div>${item.short}</div>
  </div>
  `
);

class DataviewEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: ""
		};
	}

	componentDidMount() {
		this.dataview = new DataviewDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			template: template,
			itemsInRow: 6
		});
		this.dataview && this.dataview.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);

		this.dataview.events.on("click", id => this.setState({event: "click", id: id}));
		this.dataview.events.on("focuschange", id => this.setState({event: "focuschange", id: id}));
		this.dataview.events.on("doubleclick", id => this.setState({event: "doubleclick", id: id}));
	}

	componentWillUnmount() {
		this.dataview.destructor();
	}

	render() {
		return (
			<div style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column"
			}}>
				<div
					style={{maxWidth: "100%"}}
					ref={el => this.el = el}>
				</div>
				<div style={{display: "flex", justifyContent: "center", padding: 20}}>
					<button
						className="button button--bordered">{this.state.event ? `Event: ${this.state.event}` : "Click to widget"}</button>
					<button className="button button--bordered">Item: {this.state.id ? this.state.id : ""}</button>
				</div>
			</div>
		);
	}
}

DataviewEvents.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.instanceOf(DataCollection)
	]),
	itemsInRow: PropTypes.number,
	gap: PropTypes.number,
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string
};

export default DataviewEvents;
