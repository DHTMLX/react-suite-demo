import React, { PureComponent } from "react";
import { Toolbar as ToolbarDHX } from "dhx-suite";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		...state.activeExample
	};
};

class Toolbar extends PureComponent {
	componentDidMount() {
		this.toolbar = new ToolbarDHX(this.el, {
			css: "dhx_widget--border_bottom",
			data: [
				{
					id: "title",
					type: "title",
					value: `Using DHTMLX ${this.props.activeWidget || "widgets"}`
				},
				{
					id: "separ",
					type: "separator",
					hidden: true
				},
				{
					id: "basic_link",
					value: "Basic init",
					group: "toolbarNav",
					twoSate: true,
					hidden: true
				},
				{
					id: "cdn_link",
					value: "CDN init",
					group: "toolbarNav",
					twoSate: true,
					hidden: true
				},
				{
					id: "pre_link",
					value: "Pre-configured",
					group: "toolbarNav",
					twoSate: true,
					hidden: true
				},
				{
					id: "props_link",
					value: "Using props",
					group: "toolbarNav",
					twoSate: true,
					hidden: true
				},
				{
					id: "data_link",
					value: "Data",
					group: "toolbarNav",
					twoSate: true,
					hidden: true
				},
				{
					id: "events_link",
					value: "Events",
					group: "toolbarNav",
					twoSate: true,
					hidden: true
				},
				{
					type: "spacer"
				},
				{
					id: "doc",
					type: "customButton",
					html: "<span></span>",
					css: "dock-button",
					hidden: true
				},
				{
					id: "trial",
					type: "customButton",
					css: "trial-button",
					html: "<span>Free trial</span>"
				}
			]
		});

		this.toolbar.data.update("basic_link", {active: true});
		this.toolbar.events.on("click", id => {
			switch (id) {
				case "doc":
					if (this.props.activeWidget === "Pivot") {
						window.open("https://docs.dhtmlx.com/pivot/index.html", "_blank");
					} else if (this.props.activeWidget === "Combobox") {
						window.open("https://docs.dhtmlx.com/suite/combo__index.html", "_blank");
					} else {
						window.open("https://docs.dhtmlx.com/suite/" + this.props.activeWidget.toLowerCase() + "__index.html", "_blank");
					}
					break;
				case "trial":
					if (this.props.activeWidget === "Pivot") {
						window.open("https://dhtmlx.com/docs/products/dhtmlxPivot/download.shtml", "_blank");
					} else {
						window.open("https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml", "_blank");
					}
					break;
				case "basic_link":
				case "cdn_link":
				case "pre_link":
				case "props_link":
				case "events_link":
				case "data_link":
					this.props.scrollToExample(id.split("_")[0]);
					break;
				default:
					break;
			}
		});
	}
	componentDidUpdate() {
		this.toolbar.data.update("title", {value: `Using DHTMLX ${this.props.activeWidget || "widgets"}`});
		if (!this.props.toolbarNav.includes(window.location.hash.slice(1))) {
			this.toolbar.data.map(item => {
				item.active = false;
				return null;
			});
		}
		this.toolbar.data.update("basic_link", {active: true});
		this.toolbar.data.map(item => {
			if (this.props.activeExample && item.id !== this.props.activeExample + "_link") {
				this.toolbar.data.update(item.id, {active: false});
				this.toolbar.data.update(this.props.activeExample + "_link", {active: true});
			}
		});
		const itemsToHide = ["separ", "basic_link", "cdn_link", "pre_link", "props_link", "events_link", "data_link", "doc"];
		if (this.props.toolbarNav.length > 0 && this.props.activeWidget) {
			itemsToHide.forEach(item => {
				this.toolbar.data.update(item, {hidden: true});
				return null;
			});
			this.props.toolbarNav.forEach(item => {
				this.toolbar.data.update(item + "_link", {hidden: false});
				return null;
			});
			this.toolbar.data.update("separ", {hidden: false});
			this.toolbar.data.update("doc", {html: "DHX " + this.props.activeWidget + " documentation", hidden: false});
		} else {
			itemsToHide.forEach(item => {
				this.toolbar.data.update(item, {hidden: true});
				return null;
			});
		}
	}
	componentWillUnmount() {
		this.toolbar && this.toolbar.destructor();
	}
	render() {
		return (
			<div style={{width: "100%"}} ref={el => this.el = el}></div>
		);
	}
}

export default connect(mapStateToProps)(Toolbar);