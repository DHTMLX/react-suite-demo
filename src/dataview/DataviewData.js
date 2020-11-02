import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { DataView as DataviewDHX, DataCollection } from "dhx-suite";

import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class Dataview extends Component {
	componentDidMount() {
		let { css, itemsInRow, template, data, gap, keyNavigation } = this.props;
		this.dataview = new DataviewDHX(this.el, {
			css: css,
			itemsInRow: itemsInRow,
			template: template,
			gap: gap,
			data: data,
			keyNavigation: keyNavigation,
		});
	}
	componentWillUnmount() {
		this.dataview && this.dataview.destructor();
	}
	render() {
		return <div style={{ width: "100%" }} ref={el => (this.el = el)}></div>;
	}
}

class DataviewData extends PureComponent {
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
		const template = item => `
			<div class="template template__container">
				<img class="template__image" src="${process.env.PUBLIC_URL + "/static/" + item.img}" />
				<h2 class="template__title">${item.title}</h2>
				<p class="template__description">${item.short}</p>
			</div>
		`;
		return (
			<div style={{ width: "100%" }}>
				<Dataview
					css="dhx_widget--bordered dhx_widget--bg_white"
					itemsInRow={4}
					template={template}
					gap={10}
					data={this.data}
					keyNavigation={true}
				/>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button" onClick={() => this.handleClick()}>
						{this.state.itemsCount ? `Remove first of ${this.state.itemsCount}` : "Reset data"}
					</button>
				</div>
			</div>
		);
	}
}

Dataview.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
	height: PropTypes.number,
	itemHeight: PropTypes.number,
	itemsInRow: PropTypes.number,
	gap: PropTypes.number,
	multiselection: PropTypes.bool || PropTypes.oneOf(["click", "ctrlClick"]),
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf(["target", "source", "both"]),
	dragCopy: PropTypes.bool,
};

export default DataviewData;
