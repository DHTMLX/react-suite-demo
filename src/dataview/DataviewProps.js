import React, { Component } from "react";
import PropTypes from "prop-types";
import { DataView as DataviewDHX, DataCollection } from "dhx-suite";

class Dataview extends Component {
	componentDidMount() {
		let { css, itemsInRow, data, template, gap, keyNavigation } = this.props;
		this.dataview = new DataviewDHX(this.el, {
			css: css,
			itemsInRow: itemsInRow,
			template: template,
			gap: gap,
			keyNavigation: keyNavigation,
			data: data,
		});
	}
	componentWillUnmount() {
		this.dataview && this.dataview.destructor();
	}
	render() {
		return <div style={{ width: "100%" }} ref={el => (this.el = el)}></div>;
	}
}

class DataviewProps extends Component {
	getData() {
		const data = new DataCollection();
		data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
		return data;
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
			<Dataview
				css="dhx_widget--bordered dhx_widget--bg_white"
				itemsInRow={4}
				template={template}
				gap={10}
				keyNavigation={true}
				data={this.getData()}
			/>
		);
	}
}

DataviewProps.propTypes = {
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

export default DataviewProps;
