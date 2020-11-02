import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Tree extends Component {
	componentDidMount() {
		const { css, data, keyNavigation, checkbox } = this.props;
		this.tree = new TreeDHX(this.el, {
			css: css,
			keyNavigation: keyNavigation,
			checkbox: checkbox,
			data: data,
		});
	}
	componentWillUnmount() {
		this.tree && this.tree.destructor();
	}
	render() {
		return (
			<div
				style={{ width: 350, padding: 10, background: "#fff", height: 450, overflow: "auto" }}
				ref={el => (this.el = el)}
			></div>
		);
	}
}

class TreeData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.data = new TreeCollection();
		this.data.events.on("load", () => {
			let i = this.data.map(item => (item.opened ? 1 : 0)).reduce((a, b) => a + b, 0);
			this.setState({
				count: i,
			});
		});
		this.data.load(`${process.env.PUBLIC_URL}/static/tree.json`).then(() => {
			this.data.events.on("change", () => {
				let i = this.data.map(item => (item.opened ? 1 : 0)).reduce((a, b) => a + b, 0);
				this.setState({
					count: i,
				});
			});
		});
	}
	handleClick() {
		this.data.map(item => this.data.update(item.id, { opened: false }));
		this.setState({
			count: 0,
		});
	}
	render() {
		return (
			<div>
				<Tree css={"dhx_widget--bg_white"} keyNavigation={true} checkbox={true} data={this.data} />
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button
						className="button"
						onClick={() => this.handleClick()}
						disabled={!this.state.count}
					>
						{this.state.count ? `Collapse ${this.state.count} item(s)` : "Nothing to collapse"}
					</button>
				</div>
			</div>
		);
	}
}

TreeData.propTypes = {
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	icon: PropTypes.shape({
		folder: PropTypes.string,
		openFolder: PropTypes.string,
		file: PropTypes.string,
	}),
	css: PropTypes.string,
	keyNavigation: PropTypes.bool,
	dragCopy: PropTypes.bool,
	dragMode: PropTypes.string,
	dropBehaviour: PropTypes.string,
	editable: PropTypes.bool,
	autoload: PropTypes.bool,
	checkbox: PropTypes.bool,
};

export default TreeData;
