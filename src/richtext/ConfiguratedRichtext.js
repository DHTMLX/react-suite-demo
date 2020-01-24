import React, {Component} from "react";
import {Richtext} from "dhx-richtext";
import "dhx-richtext/codebase/richtext.css";

class ConfiguratedRichtext extends Component {
	componentDidMount() {
		this.richtext = new Richtext(this.el, {
			toolbarBlocks: ["default", "clear", "fullscreen"]
		});
	}

	componentWillUnmount() {
		if (this.richtext) {
			this.richtext.destructor();
		}
	}

	render() {
		return (
			<div ref={el => this.el = el} className="widget-box" style={{width: 800, height: 400}}></div>
		);
	}
}

export default ConfiguratedRichtext;
