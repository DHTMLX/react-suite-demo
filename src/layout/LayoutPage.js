import React, {Component} from "react";
import {connect} from "react-redux";
import Layout from "./Layout";
import LayoutCdn from "./LayoutCdn";

import LayoutConfigured from "./LayoutConfigured";
import LayoutProps from "./LayoutProps";

class LayoutPage extends Component {

	componentDidMount() {
		const setActiveExapmleInHead = (entries, observer) => {
			entries.forEach(entry => {
				entry.isIntersecting && this.props.dispatch({
					type: "CHANGE_ACTIVE_EXAMPLE",
					playload: entry.target.id
				});
				entry.isIntersecting && [...this.el.querySelectorAll("section")].map(item => {
					item.classList.remove("active");
					if (item.id === entry.target.id) {
						item.classList.add("active");
					}
				});
			});
		};
		let observer = new IntersectionObserver(setActiveExapmleInHead, {
			root: document.querySelector("main"),
			rootMargin: "57px",
			threshold: 1
		});
		[...this.el.querySelectorAll("section")].map(item => observer.observe(item));
		this.props.handleToolbarNavItems([...this.el.querySelectorAll("section")].map(item => item.id));
	}

	render() {
		return (
			<main ref={(el) => this.el = el}>
				<section className="hgroup active" id="basic">
					<h3>
						NPM basic initialization
						<a href="#basic" className="anchor" onClick={(e) => this.handleAnchorClick(e, "basic")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt=""/>
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/layout/Layout.js"
						   target="_blank" rel="noopener noreferrer">Code example </a>
					</p>
					<div style={{display: "flex", justifyContent: "center"}}>
						<Layout/>
					</div>
				</section>
				<section className="hgroup" id="cdn">
					<h3>
						CDN basic initialization
						<a href="#cdn" className="anchor" onClick={(e) => this.handleAnchorClick(e, "cdn")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt=""/>
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/layout/LayoutCdn.js"
						   target="_blank" rel="noopener noreferrer">Code example </a>
					</p>
					<div style={{display: "flex", justifyContent: "center"}}>
						<LayoutCdn/>
					</div>

				</section>
				<section className="hgroup" id="pre">
					<h3>
						Pre-configured component
						<a href="#pre" className="anchor" onClick={(e) => this.handleAnchorClick(e, "pre")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt=""/>
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/layout/LayoutConfigured.js"
						   target="_blank" rel="noopener noreferrer">Code example </a>
					</p>
					<div style={{display: "flex", justifyContent: "center"}}>
						<LayoutConfigured/>
					</div>
				</section>
				<section className="hgroup" id="props">
					<h3>
						Configured using props
						<a href="#props" className="anchor" onClick={(e) => this.handleAnchorClick(e, "props")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt=""/>
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/layout/LayoutProps.js"
						   target="_blank" rel="noopener noreferrer">Code example </a>
					</p>
					<div style={{display: "flex", justifyContent: "center"}}>
						<LayoutProps/>
					</div>
				</section>
			</main>
		);
	}
}

export default connect(state => state)(LayoutPage);