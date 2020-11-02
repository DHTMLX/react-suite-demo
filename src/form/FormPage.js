import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import FormCdn from "./FormCdn";

import FormConfigured from "./FormConfigured";
import FormProps from "./FormProps";
import FormEvents from "./FormEvents";

class FormPage extends Component {
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
						NPM basic initialization
						<a href="#basic" className="anchor" onClick={e => this.handleAnchorClick(e, "basic")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/form/Form.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Form />
					</div>
				</section>
				<section className="hgroup" id="cdn">
					<h3>
						CDN basic initialization
						<a href="#cdn" className="anchor" onClick={e => this.handleAnchorClick(e, "cdn")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/form/FormCdn.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<FormCdn />
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
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/form/FormConfigured.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<FormConfigured />
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
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/form/FormProps.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<FormProps />
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
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/form/FormEvents.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<FormEvents />
					</div>
				</section>
			</main>
		);
	}
}

export default connect(state => state)(FormPage);
