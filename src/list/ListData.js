import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { List as ListDHX, DataCollection } from "dhx-suite";

class List extends Component {
	componentDidMount() {
		let { css, height, template, itemHeight, virtual, keyNavigation, data } = this.props;
		this.list = new ListDHX(this.el, {
			css: css,
			data: data,
			template: template,
			height: height,
			itemHeight: itemHeight,
			virtual: virtual,
			keyNavigation: keyNavigation,
		});
	}
	componentWillUnmount() {
		this.list && this.list.destructor();
	}
	render() {
		return (
			<div
				style={{
					height: 400,
				}}
				ref={el => (this.el = el)}
			></div>
		);
	}
}

class ListData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			itemsCount: null,
		};
		this.data = new DataCollection();

		this.data.events.on("load", () => {
			this.setState({
				itemsCount: this.data.getLength(),
			});
		});
		this.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`).then(() => {
			this.data.events.on("change", () => {
				this.setState({
					itemsCount: this.data.getLength(),
				});
			});
		});
	}
	componentWillUnmount() {
		this.data.events.detach("load");
	}
	handleClick() {
		if (this.state.itemsCount === 0) {
			this.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
		} else {
			this.data.remove(this.data.getId(0));
		}
	}
	render() {
		return (
			<div style={{ height: 400, width: 400 }}>
				<List
					css={"dhx_widget--bordered dhx_widget--bg_white"}
					template={item =>
						`<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.title}</strong> <span>${item.short}</span></div>`
					}
					height={400}
					itemHeight={70}
					virtual={false}
					data={this.data}
					keyNavigation={true}
				/>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button" onClick={() => this.handleClick()}>
						{this.state.itemsCount === 0
							? "Reset"
							: `Remove first of ${this.state.itemsCount} items`}
					</button>
				</div>
			</div>
		);
	}
}

List.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
	virtual: PropTypes.bool,
	height: PropTypes.number,
	itemHeight: PropTypes.number,
	multiselection: PropTypes.bool || PropTypes.oneOf(["click", "ctrlClick"]),
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf(["target", "source", "both"]),
	dragCopy: PropTypes.bool,
};

export default ListData;
