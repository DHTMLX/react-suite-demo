import React, {Component} from "react";
import Richtext from "./Richtext";
import RichtextCdn from "./RichtextCdn";

import RichtextConfigured from "./RichtextConfigured";
import RichtextProps from "./RichtextProps";

class RichtextPage extends Component {

	componentDidMount() {
		const setActiveExapmleInHead = (entries, observer) => {
			entries.forEach(entry => {
				entry.isIntersecting && this.props.setActiveExapmle(entry.target.id, true);
			});
		};
		let observer = new IntersectionObserver(setActiveExapmleInHead, {
			root: document.querySelector("main"),
			rootMargin: "0px",
			threshold: 1
		});
		[...this.el.querySelectorAll("section")].map(item => observer.observe(item));
		this.props.handleToolbarNavItems([...this.el.querySelectorAll("section")].map(item => item.id));
	}

	handleAnchorClick(e, id) {
		e.preventDefault();
		this.props.setActiveExapmle(id, false);
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
						<a href="https://github.com/DHTMLX/react-widgets/blob/dev/src/richtext/Richtext.js"
						   target="_blank" rel="noopener noreferrer">Code example </a>
					</p>
					<div style={{display: "flex", justifyContent: "center"}}>
						<Richtext/>
					</div>
				</section>
				{/* <section className="hgroup" id="cdn">
					<h3>
						CDN basic initialization 
						<a href="#cdn" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'cdn')}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/dev/src/richtext/RichtextCdn.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<RichtextCdn /> 
					</div>
				</section> */}
				<section className="hgroup" id="pre">
					<h3>
						Pre-configured component
						<a href="#pre" className="anchor" onClick={(e) => this.handleAnchorClick(e, "pre")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt=""/>
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/dev/src/richtext/RichtextConfigured.js"
						   target="_blank" rel="noopener noreferrer">Code example </a>
					</p>
					<div style={{display: "flex", justifyContent: "center"}}>
						<RichtextConfigured/>
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
						<a href="https://github.com/DHTMLX/react-widgets/blob/dev/src/richtext/RichtextProps.js"
						   target="_blank" rel="noopener noreferrer">Code example </a>
					</p>
					<div style={{display: "flex", justifyContent: "center"}}>
						<RichtextProps/>
					</div>
				</section>
			</main>
		);
	}
}

export default connect(state => state)(RichtextPage);