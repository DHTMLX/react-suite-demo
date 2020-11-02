import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";

class Toolbar extends Component {
	componentDidMount() {
		let { css, data } = this.props;
		this.toolbar = new ToolbarDHX(this.el, {
			css: css,
			data: data,
			navigationType: "pointer",
		});
	}
	componentWillUnmount() {
		this.toolbar.destructor();
	}
	render() {
		return <div style={{ width: "100%" }} ref={el => (this.el = el)}></div>;
	}
}

class ToolbarData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.data = new TreeCollection();

		this.data.load(`${process.env.PUBLIC_URL}/static/toolbar.json`).then(() => {
			this.data.events.on("change", () => {
				this.setState({
					count: this.data.getItem("add").count,
				});
			});
		});
	}
	handleClickAdd() {
		this.data.update("add", { count: this.data.getItem("add").count + 1 });
	}
	handleClickReset() {
		this.data.update("add", { count: 0 });
	}
	render() {
		return (
			<div style={{ width: "100%" }}>
				<Toolbar css="dhx_widget--bordered dhx_widget--bg_white" data={this.data} />
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button" onClick={() => this.handleClickAdd()}>
						Add notification
					</button>
					<button
						className="button"
						onClick={() => this.handleClickReset()}
						disabled={!this.state.count}
					>
						Reset {this.state.count} notification(s))
					</button>
				</div>
			</div>
		);
	}
}

ToolbarData.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	navigationType: PropTypes.string,
};

export default ToolbarData;
