import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout as LayoutDHX } from "dhx-suite";
import ReactDOMServer from "react-dom/server";
import "dhx-suite/codebase/suite.min.css";

class Test extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
}

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			text: "ololo"
		};
	}
	componentDidMount() {
		this.layout = new LayoutDHX(this.el, {
			css: "dhx_layout-cell--bordered dhx_widget--bg_white",
			rows: [{
				id: "toolbar",
				html: "Header",
				css: "dhx_layout-cell--border_bottom",
				gravity: false,
				height: "60px"
			},
				{
					cols: [{
						id: "sidebar",
						html: "Sidebar",
						gravity: false,
						css: "dhx_layout-cell--border_right",
						width: "200px"
					},
						{
							rows: [{
								id: "content",
								css: "",
								html: "Content"
							}]
						},
						{
							id: "rightbar",
							html: "Aside",
							gravity: false,
							css: "dhx_layout-cell--border_left",
							width: "200px"
						}
					]
				},
				{
					id: "footer",
					html: "Footer",
					css: "dhx_layout-cell--border_top",
					gravity: false,
					height: "60px"
				}
			]
		});
		this.layout.cell("content").attachHTML(ReactDOMServer.renderToString(<Test text={this.state.text}/>));
	}
	componentWillUnmount() {
		this.layout && this.layout.destructor();
	}
	handleClick() {
		this.setState({
			text: "New text"
		}, () => {
			this.layout.cell("content").attachHTML(ReactDOMServer.renderToString(<Test text={this.state.text}/>));
		});
	}
	render() {
		return (
			<div>
				<div style={{width: "100%", height: 600}} ref={el => this.el = el}></div>
				<button onClick={() => this.handleClick()}>{this.state.text}</button>
			</div>
		);
	}
}

Layout.propTypes = {};

export default Layout;
