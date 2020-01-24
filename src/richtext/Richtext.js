import React, {Component} from "react";
import {Richtext} from "dhx-richtext";
import PropTypes from "prop-types";
import "dhx-richtext/codebase/richtext.css";

class RichtextComponent extends Component {
	componentDidMount() {
		this.richtext = new Richtext(this.el, {
			mode: this.props.mode
		});

		if (this.props.value) {
			this.richtext.setValue(this.props.value, this.props.dataType);
		}
		if (this.props.onChange) {
			this.richtext.events.on("change", () => {
				this.props.onChange(this.richtext.getValue(this.props.dataType));
			});
		}
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

RichtextComponent.propTypes = {
	mode: PropTypes.string,
	value: PropTypes.string,
	dataType: PropTypes.string,
	onChange: PropTypes.func
};
RichtextComponent.defaultProps = {
	mode: "classic",
	dataType: "html"
};

export default RichtextComponent;
