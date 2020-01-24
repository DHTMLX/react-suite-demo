import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";
import {Tree as TreeDHX, TreeCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Tree extends Component {
	componentDidMount() {
		let {css, data, keyNavigation, autoload, checkbox} = this.props;
		this.tree = new TreeDHX(this.el, {
			css: css,
			keyNavigation: keyNavigation,
			autoload: autoload,
			checkbox: checkbox,
			data: data
		});
	}

	componentWillUnmount() {
		this.tree.destructor();
	}

	render() {
		return (
			<div
				style={{minWidth: 270, padding: 10, background: "#fff"}}
				ref={el => this.el = el}>
			</div>
		);
	}
}

class TreeData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.data = new TreeCollection();
		this.data.events.on("load", () => {
			let i = this.data.map(item => item.opened ? 1 : 0).reduce((a, b) => a + b, 0);
			this.setState({
				count: i
			});
		});
		this.data.load(`${process.env.PUBLIC_URL}/static/tree.json`).then(() => {
			this.data.events.on("change", () => {
				let i = this.data.map(item => item.opened ? 1 : 0).reduce((a, b) => a + b, 0);
				this.setState({
					count: i
				});
			});
		});
	}

	handleClick() {
		this.data.map(item => this.data.update(item.id, {opened: false}));
		this.setState({
			count: 0
		});
	}

	render() {
		return (
			<div>
				<Tree
					css={"dhx_widget--bg_white"}
					keyNavigation={true}
					autoload={true}
					checkbox={true}
					data={this.data}
				/>
				<div style={{display: "flex", justifyContent: "center", padding: 20}}>
					<button className="button" onClick={() => this.handleClick()}
					        disabled={!this.state.count}>{this.state.count ? `Collapse ${this.state.count} item(s)` : "Nothing to collapse"} </button>
				</div>
			</div>
		);
	}
}

TreeData.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([
		PropTypes.array,
		PropTypes.instanceOf(TreeCollection)
	])
};

export default TreeData;