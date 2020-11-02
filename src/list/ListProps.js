import React, { Component } from "react";
import PropTypes from "prop-types";
import { List as ListDHX, DataCollection } from "dhx-suite";

class List extends Component {
	componentDidMount() {
		let { css, height, template, itemHeight, virtual, keyNavigation, data } = this.props;
		this.list = new ListDHX(this.el, {
			css: css,
			template: template,
			height: height,
			itemHeight: itemHeight,
			virtual: virtual,
			data: data,
			keyNavigation: keyNavigation,
		});
	}
	componentWillUnmount() {
		this.list && this.list.destructor();
	}
	render() {
		return <div style={{ height: 400, width: 400 }} ref={el => (this.el = el)}></div>;
	}
}

class ListProps extends Component {
	getData() {
		const data = new DataCollection();
		data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
		return data;
	}
	render() {
		return (
			<List
				css={"dhx_widget--bordered dhx_widget--bg_white"}
				template={item =>
					`<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.title}</strong> <span>${item.short}</span></div>`
				}
				height={400}
				itemHeight={70}
				data={this.getData()}
				virtual={false}
				keyNavigation={true}
			/>
		);
	}
}

ListProps.propTypes = {
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

export default ListProps;
