import React, {
	Component
} from 'react'
import Colorpicker from './Colorpicker';
import ColorpickerCdn from './ColorpickerCdn';

import ColorpickerConfigured from './ColorpickerConfigured';
import ColorpickerProps from './ColorpickerProps';

export default class ColorpickerPage extends Component {

	componentDidMount() {
		this.props.handleToolbarNavItems([...this.el.querySelectorAll('section')].map(item => item.id))
	}
	handleAnchorClick(e, id) {
		e.preventDefault()
		this.props.setActiveExapmle(id)
	}
	render() {
		return ( <
			main ref = {
				(el) => this.el = el
			} >
			<
			section className = "hgroup active"
			id = "basic" >
			<
			h3 >
			NPM basic initialization <
			a href = "#basic"
			className = "anchor"
			onClick = {
				(e) => this.handleAnchorClick(e, 'basic')
			} >
			<
			img src = "/static/link.svg"
			alt = "" / >
			<
			/a> <
			/h3> <
			p >
			<
			a href = "https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/Colorpicker.js"
			target = "_blank"
			rel = "noopener noreferrer" > Code example < /a>  <
			/p> <
			div style = {
				{
					display: 'flex',
					justifyContent: 'center'
				}
			} >
			<
			Colorpicker / >
			<
			/div> <
			/section> <
			section className = "hgroup"
			id = "cdn" >
			<
			h3 >
			CDN basic initialization <
			a href = "#cdn"
			className = "anchor"
			onClick = {
				(e) => this.handleAnchorClick(e, 'cdn')
			} >
			<
			img src = "/static/link.svg"
			alt = "" / >
			<
			/a> <
			/h3> <
			p >
			<
			a href = "https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/ColorpickerCdn.js"
			target = "_blank"
			rel = "noopener noreferrer" > Code example < /a>  <
			/p> <
			div style = {
				{
					display: 'flex',
					justifyContent: 'center'
				}
			} >
			<
			ColorpickerCdn / >
			<
			/div>

			<
			/section> <
			section className = "hgroup"
			id = "pre" >
			<
			h3 >
			Pre - configured component <
			a href = "#pre"
			className = "anchor"
			onClick = {
				(e) => this.handleAnchorClick(e, 'pre')
			} >
			<
			img src = "/static/link.svg"
			alt = "" / >
			<
			/a> <
			/h3> <
			p >
			<
			a href = "https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/ColorpickerConfigured.js"
			target = "_blank"
			rel = "noopener noreferrer" > Code example < /a>  <
			/p> <
			div style = {
				{
					display: 'flex',
					justifyContent: 'center'
				}
			} >
			<
			ColorpickerConfigured / >
			<
			/div> <
			/section> <
			section className = "hgroup"
			id = "props" >
			<
			h3 >
			Configured using props <
			a href = "#props"
			className = "anchor"
			onClick = {
				(e) => this.handleAnchorClick(e, 'props')
			} >
			<
			img src = "/static/link.svg"
			alt = "" / >
			<
			/a> <
			/h3> <
			p >
			<
			a href = "https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/ColorpickerProps.js"
			target = "_blank"
			rel = "noopener noreferrer" > Code example < /a>  <
			/p> <
			div style = {
				{
					display: 'flex',
					justifyContent: 'center'
				}
			} >
			<
			ColorpickerProps / >
			<
			/div> <
			/section> <
			/main>
		)
	}
}