
import React, { Component } from 'react'
import Grid from './Grid';
import GridCdn from './GridCdn';

import GridConfigured from './GridConfigured';
import GridProps from './GridProps';

export default class GridPage extends Component {

	componentDidMount() {
		let toolbarNavItems = [...this.el.querySelectorAll('section')]
		toolbarNavItems = toolbarNavItems.map(item => item.id)
		this.props.handleToolbarNavItems(toolbarNavItems)
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
						NPM basic inintialization 
						<a href="#basic" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'basic')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/grid/Grid.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Grid /> 
					</div>
				</section>
				<section className="hgroup" id="cdn">
					<h3>
						CDN basic inintialization 
						<a href="#cdn" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'cdn')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/grid/GridCDN.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<GridCdn /> 
					</div>
					
				</section>
				<section className="hgroup" id="pre">
					<h3>
						Pre-configured component
						<a href="#pre" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'pre')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/grid/GridConfigured.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<GridConfigured />
					</div>
				</section>
				<section className="hgroup" id="props">
					<h3>
						Configured using props
						<a href="#props" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'props')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/grid/GridProps.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<GridProps />
					</div>
				</section>
			</main>
		)
	}
}
