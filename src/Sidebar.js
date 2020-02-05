import React, { PureComponent } from "react";
import { Sidebar as SidebarDHX } from "dhx-suite";
import { withRouter } from "react-router-dom";

class Sidebar extends PureComponent {
	componentDidUpdate() {
		this.sidebar.data.map(item => item.active = false);
		const activeWidget = window.location.href.split("/").pop();
		this.sidebar.data.update(activeWidget + "-link", {active: true});
	}
	componentDidMount() {
		this.sidebar = new SidebarDHX(this.el, {
			css: "dhx_widget--border_right",
			data: [
				{
					id: "logo",
					type: "customButton",
					css: "logo-button",
					html: `<img src="${process.env.PUBLIC_URL}/static/logo_r.svg" alt="DHTMLX - React"/>`,
					group: "nav",
					twoState: true
				},
				{
					value: "Calendar",
					id: "calendar-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Toolbar",
					id: "toolbar-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Timepicker",
					id: "timepicker-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Slider",
					id: "slider-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Colorpicker",
					id: "colorpicker-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Sidebar",
					id: "sidebar-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Ribbon",
					id: "ribbon-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Dataview",
					id: "dataview-link",
					group: "nav",
					twoState: true
				},
				{
					value: "List",
					id: "list-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Grid",
					id: "grid-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Menu",
					id: "menu-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Form",
					id: "form-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Tabbar",
					id: "tabbar-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Combobox",
					id: "combobox-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Tree",
					id: "tree-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Chart",
					id: "chart-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Window",
					id: "window-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Message",
					id: "message-link",
					group: "nav",
					twoState: true
				},
				{
					value: "Popup",
					id: "popup-link",
					group: "nav",
					twoState: true
				}
			]
		});
		const activeWidget = window.location.href.split("/").pop();
		if (activeWidget) {
			this.props.handleActiveWidgetChange(activeWidget);
		}
		this.sidebar.events.on("click", (id) => {
			if (id !== "logo") {
				const widgetName = id.split("-")[0];
				this.props.history.push("/" + widgetName);
				this.props.handleActiveWidgetChange(widgetName);
				if (activeWidget) {
					this.sidebar.data.update(activeWidget + "-link", {active: false});
				}
				this.sidebar.data.update(widgetName + "-link", {active: true});
			} else {
				this.props.history.push("/");
				this.props.handleActiveWidgetChange("");
				if (activeWidget) {
					this.sidebar.data.update(activeWidget + "-link", {active: false});
				}
			}
		});
	}
	componentWillUnmount() {
		this.sidebar && this.sidebar.destructor();
	}
	render() {
		return (
			<div style={{maxHeight: "100vh"}} ref={el => this.el = el}></div>
		);
	}
}

export default withRouter(Sidebar);