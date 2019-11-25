
import React, { Component } from 'react'
import Ribbon from './Ribbon';
import RibbonCdn from './RibbonCdn';

import RibbonConfigured from './RibbonConfigured';
import RibbonProps from './RibbonProps';
import RibbonData from './RibbonData';
import RibbonEvents from './RibbonEvents';

export default class RibbonPage extends Component {

	componentDidMount() {
		this.props.handleToolbarNavItems([...this.el.querySelectorAll('section')].map(item => item.id))
	}
	handleAnchorClick(e, id) {
		e.preventDefault()
		this.props.setActiveExapmle(id)
	}
	render() {
		return (
			<main ref={(el) => this.el = el}>
				<section className="hgroup active" id="basic">
					<h3>
						NPM basic initialization 
						<a href="#basic" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'basic')}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/ribbon/Ribbon.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Ribbon /> 
					</div>
				</section>
				<section className="hgroup" id="cdn">
					<h3>
						CDN basic initialization 
						<a href="#cdn" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'cdn')}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/ribbon/RibbonCdn.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<RibbonCdn /> 
					</div>
					
				</section>
				<section className="hgroup" id="pre">
					<h3>
						Pre-configured component
						<a href="#pre" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'pre')}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/ribbon/RibbonConfigured.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<RibbonConfigured />
					</div>
				</section>
				<section className="hgroup" id="props">
					<h3>
						Configured using props
						<a href="#props" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'props')}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/ribbon/RibbonProps.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<RibbonProps />
					</div>
				</section>
				<section className="hgroup" id="data">
					<h3>
						Work with data
						<a href="#data" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'data')}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/ribbon/RibbonData.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<RibbonData />
					</div>
				</section>
				<section className="hgroup" id="events">
					<h3>
						Component events
						<a href="#events" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'events')}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/ribbon/RibbonEvents.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<RibbonEvents />
					</div>
				</section>
			</main>
		)
	}
}
