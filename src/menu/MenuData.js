import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";

class Menu extends Component {
	componentDidMount() {
		let { css, data } = this.props;
		this.menu = new MenuDHX(this.el, {
			css: css,
			data: data,
		});
	}
	componentWillUnmount() {
		this.menu && this.menu.destructor();
	}
	render() {
		return <div style={{ width: "100%", maxWidth: 1200 }} ref={el => (this.el = el)}></div>;
	}
}

class MenuData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isDisabled: "",
		};
		this.data = new TreeCollection();
		this.data.events.on("load", () => {
			this.setState({
				isDisabled: this.data.getItem("edit").disabled,
			});
		});
	}
	componentDidMount() {
		this.data.load(`${process.env.PUBLIC_URL}/static/menu.json`).then(() => {
			this.data.events.on("change", () => {
				this.setState({
					isDisabled: this.data.getItem("edit").disabled,
				});
			});
		});
	}
	componentWillUnmount() {
		this.data.events.detach("load");
	}
	handlePrintEnable() {
		this.data.update("edit", { disabled: !this.data.getItem("edit").disabled });
	}
	render() {
		return (
			<div style={{ width: "100%", maxWidth: 1200 }}>
				<Menu css="dhx_widget--bordered dhx_widget--bg_white" data={this.data} />
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button" onClick={() => this.handlePrintEnable()}>
						{`${this.state.isDisabled ? "Enable" : "Disable"}`} edit
					</button>
				</div>
			</div>
		);
	}
}

MenuData.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	navigationType: PropTypes.oneOf(["pointer", "click"]),
};

export default MenuData;
