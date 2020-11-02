import React, { Component } from "react";
import Chart from "./Chart";
import { connect } from "react-redux";

import ChartCdn from "./ChartCdn";
import ChartConfigured from "./ChartConfigured";
import ChartProps from "./ChartProps";
import ChartData from "./ChartData";

class ChartPage extends Component {
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
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/chart/Chart.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Chart />
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
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/chart/ChartCdn.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ChartCdn />
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
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/chart/ChartConfigured.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ChartConfigured />
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
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/chart/ChartProps.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ChartProps />
					</div>
				</section>
				<section className="hgroup" id="data">
					<h3>
						Work with data
						<a href="#data" className="anchor" onClick={e => this.handleAnchorClick(e, "data")}>
							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
						</a>
					</h3>
					<p>
						<a
							href="https://github.com/DHTMLX/react-widgets/blob/master/src/chart/ChartData.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code example{" "}
						</a>
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ChartData />
					</div>
				</section>
			</main>
		);
	}
}

export default connect(state => state)(ChartPage);
