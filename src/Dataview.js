import React, { PureComponent } from "react";
import { DataView as DataviewDHX } from "dhx-suite";
import { withRouter } from "react-router-dom";

import "./dataview.css";

class Dataview extends PureComponent {
	componentDidMount() {
		this.dataview = new DataviewDHX(this.el, {
			itemsInRow: 5,
			css: "app-card",
			template: (item) => `
				<div class="app-card__inner" style="padding-top: 100%;"> 
					<h3 class="app-card__header">${item.value}</h3>
					<img class="app-card__image" src=${process.env.PUBLIC_URL}/static/images/icons/${item.id.split("-")[0]}.svg alt="${item.id.split("-")[0]}"/>
				</div>
			`,		
			gap: 20,
			data: [
				{
					value: "Calendar",
					id: "calendar-link"
				},
				{
					value: "Toolbar",
					id: "toolbar-link"
				},
				{
					value: "Timepicker",
					id: "timepicker-link"
				},
				{
					value: "Slider",
					id: "slider-link"
				},
				{
					value: "Colorpicker",
					id: "colorpicker-link"
				},
				{
					value: "Sidebar",
					id: "sidebar-link"
				},
				{
					value: "Ribbon",
					id: "ribbon-link"
				},
				{
					value: "Dataview",
					id: "dataview-link"
				},
				{
					value: "List",
					id: "list-link"
				},
				{
					value: "Grid",
					id: "grid-link"
				},
				{
					value: "Menu",
					id: "menu-link"
				},
				{
					value: "Form",
					id: "form-link"
				},
				{
					value: "Tabbar",
					id: "tabbar-link"
				},
				{
					value: "Combobox",
					id: "combobox-link"
				},
				{
					value: "Tree",
					id: "tree-link"
				},
				{
					value: "Chart",
					id: "chart-link"
				},
				{
					value: "Window",
					id: "window-link"
				},
				{
					value: "Message",
					id: "message-link"
				},
				{
					value: "Popup",
					id: "popup-link"
				}
			]
		});
		this.dataview.events.on("click", (id) => {
			const widgetName = id.split("-")[0];
			this.props.history.push("/" + widgetName);
			this.props.handleActiveWidgetChange(widgetName);
		});
	}
	componentWillUnmount() {
		this.dataview && this.dataview.destructor();
	}
	render() {
		return (
			<div style={{maxWidth: "800px", margin: "auto", flex: "1 0 auto"}} ref={el => this.el = el}></div>
		);
	}
}

export default withRouter(Dataview);