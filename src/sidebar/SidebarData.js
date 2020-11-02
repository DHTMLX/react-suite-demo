import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Sidebar as SidebarDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Sidebar extends Component {
	componentDidMount() {
		let { css, data } = this.props;
		this.sidebar = new SidebarDHX(this.el, {
			css: css,
			data: data,
		});
	}
	componentWillUnmount() {
		this.sidebar && this.sidebar.destructor();
	}
	render() {
		return (
			<div
				style={{
					display: "inline-flex",
				}}
				ref={el => (this.el = el)}
			></div>
		);
	}
}

class SidebarData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.data = new TreeCollection();
		this.data.load(`${process.env.PUBLIC_URL}/static/sidebar.json`).then(() => {
			this.data.events.on("change", () => {
				this.setState({
					count: this.data.getItem("media").count,
				});
			});
		});
	}
	handleClickAdd() {
		this.data.update("media", { count: this.data.getItem("media").count + 1 });
	}
	handleClickReset() {
		this.data.update("media", { count: 0 });
	}
	render() {
		return (
			<div>
				<Sidebar css="dhx_widget--bordered dhx_widget--bg_white" data={this.data} />
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button" onClick={() => this.handleClickAdd()}>
						Add notification
					</button>
					<button
						className="button"
						onClick={() => this.handleClickReset()}
						disabled={!this.state.count}
					>
						Reset {this.state.count} notification(s)
					</button>
				</div>
			</div>
		);
	}
}

SidebarData.propTypes = {
	css: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	collapsed: PropTypes.bool,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
};

export default SidebarData;
