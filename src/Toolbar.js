
import React, { PureComponent } from 'react'
import { Toolbar as ToolbarDHX } from 'dhx-suite'

export default class Toolbar extends PureComponent {
	componentDidMount() {
		this.toolbar = new ToolbarDHX(this.el, {
			css: 'dhx_widget--border_bottom',
      data: [
				{
					id: "title",
					type: "title",
				 	value: `Using DHTMLX ${this.props.activeWidget || 'widgets'} in a React app`
				},
				{
					id: "separ",
					type: "separator",
					hidden: true,
				},
				{
					id: "basic_link",
					value: "Basic init",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "cdn_link",
					value: "CDN init",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "pre_link",
					value: "Pre-configured",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "props_link",
					value: "Using props",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "events_link",
					value: "Events",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "data_link",
					value: "Data",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					type: 'spacer',
				},
				{
					id: 'doc',
					type: 'customButton',
					html: '<span></span>',
					css: 'dock-button',
					hidden: true,
				},
				{
					id: 'trial',
					type: 'customButton',
					css: 'trial-button',
					html: '<span>Free trial</span>'
				}
			]
		});
		this.toolbar.data.update('basic_link', {active: true})
		this.toolbar.events.on('click', id => {
			switch (id) {
				case 'doc': 
					window.open('https://docs.dhtmlx.com/suite/' + this.props.activeWidget.toLowerCase() + '__index.html', '_blank')
					break;
				case 'trial':
					window.open('https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml', '_blank')	
					break;
				case 'basic_link':
				case 'cdn_link':
				case 'pre_link':
				case 'props_link':
				case 'events_link':
				case 'data_link': 
					this.props.scrollToExample(id.split('_')[0])
					break;
				default:
					break;
			}
		})
	}
	componentDidUpdate() {
		this.toolbar.data.update('title', {value: `Using DHTMLX ${this.props.activeWidget || 'widgets'} in a React app`})
		
		if (this.props.toolbarNav.length > 0) {
			this.props.toolbarNav.map((item, key) => {
				this.toolbar.data.update('separ', {hidden: false})
				this.toolbar.data.update(item + "_link", {hidden: false})
				this.toolbar.data.update('doc', {html:'DHX ' + this.props.activeWidget + ' documentation', hidden: false })
				return null
			})
		} else {
			const itemsToHide = ['separ', 'basic_link', 'cdn_link', 'pre_link', 'props_link', 'events_link', 'data_link', 'doc']
			itemsToHide.map(item => {
				this.toolbar.data.update(item, {hidden: true})
				return null
			})
		}
	}
	componentWillUnmount() {
    this.toolbar.destructor();
  }
	render() {
		return (
			<div style={{width: '100%'}} ref={el => this.el = el}>
				
			</div>
		)
	}
}