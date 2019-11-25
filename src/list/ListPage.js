
import React, { Component } from 'react'
import List from './List';
import ListCdn from './ListCdn';

import ListConfigured from './ListConfigured';
import ListProps from './ListProps';
import ListData from './ListData';
import ListEvents from './ListEvents';

export default class ListPage extends Component {

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
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/list/List.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<List /> 
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
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/list/ListCdn.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<ListCdn /> 
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
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/list/ListConfigured.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<ListConfigured />
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
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/list/ListProps.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<ListProps />
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
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/list/ListData.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<ListData />
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
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/list/ListEvents.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<ListEvents />
					</div>
				</section>
			</main>
		)
	}
}
