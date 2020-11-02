import React, { Component } from "react";
import Colorpicker from "./Colorpicker";
import { connect } from "react-redux";

import ColorpickerCdn from "./ColorpickerCdn";
import ColorpickerConfigured from "./ColorpickerConfigured";
import ColorpickerProps from "./ColorpickerProps";
import ColorpickerEvents from "./ColorpickerEvents";

class ColorpickerPage extends Component {
	componentDidMount() {
		const setActiveExapmleInHead = (entries, observer) => {
			entries.forEach(entry => {
				entry.isIntersecting &&
					this.props.dispatch({
						type: "CHANGE_ACTIVE_EXAMPLE",
						playload: entry.target.id,
					});
				entry.isIntersecting &&
					[...this.el.querySelectorAll("section")].map(item => {
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
			threshold: 1,
		});
		[...this.el.querySelectorAll("section")].map(item => observer.observe(item));
		this.props.handleToolbarNavItems([...this.el.querySelectorAll("section")].map(item => item.id));
	}
	render() {
		return (
			<main ref={el => (this.el = el)}>
				<section className="hgroup active" id="basic">
					<h3>
						NPM basic inintialization
						<a href="#basic" className="anchor" onClick={e => this.handleAnchorClick(e, "basic")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/Colorpicker.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Colorpicker />
					</div>
				</section>
				<section className="hgroup" id="cdn">
					<h3>
						CDN basic inintialization
						<a href="#cdn" className="anchor" onClick={e => this.handleAnchorClick(e, "cdn")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/ColorpickerCdn.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ColorpickerCdn />
					</div>
				</section>
				<section className="hgroup" id="pre">
					<h3>
						Pre-configured component
						<a href="#pre" className="anchor" onClick={e => this.handleAnchorClick(e, "pre")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/ColorpickerConfigured.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ColorpickerConfigured />
					</div>
				</section>
				<section className="hgroup" id="props">
					<h3>
						Configured using props
						<a href="#props" className="anchor" onClick={e => this.handleAnchorClick(e, "props")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/ColorpickerProps.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ColorpickerProps />
					</div>
				</section>
				<section className="hgroup" id="events">
					<h3>
						Component Events
						<a
							href="#events"
							className="anchor"
							onClick={e => this.handleAnchorClick(e, "events")}
						>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/colorpicker/ColorpickerEvents.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ColorpickerEvents />
					</div>
				</section>
			</main>
		);
	}
}

export default connect(state => state)(ColorpickerPage);
