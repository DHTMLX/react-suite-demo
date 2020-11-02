import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Ribbon as RibbonDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class Ribbon extends Component {
	componentDidMount() {
		let { css, data } = this.props;
		this.ribbon = new RibbonDHX(this.el, {
			css: css,
			data: data,
		});
	}
	componentWillUnmount() {
		this.ribbon && this.ribbon.destructor();
	}
	render() {
		return <div style={{ display: "inline-flex" }} ref={el => (this.el = el)}></div>;
	}
}

class RibbonData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isDisabled: "",
		};
		this.data = new TreeCollection();
		this.data.events.on("load", () => {
			this.setState({
				isDisabled: this.data.getItem("print").disabled,
			});
		});
	}
	componentDidMount() {
		this.data.load(`${process.env.PUBLIC_URL}/static/ribbon.json`).then(() => {
			this.data.events.on("change", () => {
				this.setState({
					isDisabled: this.data.getItem("print").disabled,
				});
			});
		});
	}
	componentWillUnmount() {
		this.data.events.detach("load");
	}
	handlePrintEnable() {
		this.data.update("print", { disabled: !this.data.getItem("print").disabled });
	}
	render() {
		return (
			<div>
				<Ribbon css="dhx_widget--bordered dhx_widget--bg_white" data={this.data} />
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button" onClick={() => this.handlePrintEnable()}>
						{`${this.state.isDisabled ? "Enable" : "Disable"}`} Print button
					</button>
				</div>
			</div>
		);
	}
}

RibbonData.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
};

export default RibbonData;
