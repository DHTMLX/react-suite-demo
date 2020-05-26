import React, { Component } from "react";
import PropTypes from "prop-types";
import { DataView as DataviewDHX, DataCollection } from "dhx-suite";

const template = item => (`
	<div class="template template__container">
		<img class="template__image" src="${process.env.PUBLIC_URL + "/static/" + item.img}" />
		<h2 class="template__title">${item.title}</h2>
		<p class="template__description">${item.short}</p>
	</div>
`);

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
			itemsInRow: 4,
			gap: 10
		});
		this.dataview && this.dataview.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);

		this.dataview.events.on("click", id => this.setState({event: "click", id: id}));
		this.dataview.events.on("focuschange", id => this.setState({event: "focuschange", id: id}));
		this.dataview.events.on("doubleclick", id => this.setState({event: "doubleclick", id: id}));
	}
	componentWillUnmount() {
		this.dataview && this.dataview.destructor();
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
				<div style={{width: "100%"}}	ref={el => this.el = el}></div>
				<div style={{display: "flex", justifyContent: "center", padding: 20}}>
				<button	className="button button--bordered">
					{this.state.event ? `Event: ${this.state.event}` : "Click to widget"}
				</button>
				<button className="button button--bordered">
					Item: {this.state.id ? this.state.id : ""}
				</button>
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
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
	height: PropTypes.number,
	itemHeight: PropTypes.number,
	itemsInRow: PropTypes.number,
	gap: PropTypes.number,
	multiselection: PropTypes.bool || PropTypes.oneOf(["click", "ctrlClick"]),
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf(["target", "source", "both"]),
	dragCopy: PropTypes.bool
};

export default DataviewEvents;
