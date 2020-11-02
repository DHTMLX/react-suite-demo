import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class ChartCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css",
		]);
	}

	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.chart = new dhx.Chart(this.el, {
				type: "line",
				scales: {
					bottom: {
						text: "month",
					},
					left: {
						maxTicks: 10,
						max: 100,
						min: 0,
					},
				},
				series: [
					{
						id: "A",
						value: "company C",
						color: "#5E83BA",
						pointType: "circle",
						fill: "#5E83BA",
						barWidth: 35,
					},
				],
			});
			this.chart.data.load(`${process.env.PUBLIC_URL}/static/chart.json`);
			if (this.props.ready) {
				this.props.ready(this.chart);
			}
		});
	}

	componentWillUnmount() {
		this.chart && this.chart.destructor();
	}
	render() {
		return <div style={{ width: 500, height: 300 }} ref={el => (this.el = el)}></div>;
	}
}

ChartCDN.propTypes = {
	type: PropTypes.oneOf([
		"bar",
		"line",
		"spline",
		"scatter",
		"area",
		"donut",
		"pie",
		"pie3D",
		"radar",
		"xbar",
		"splineArea",
	]),
	barWidth: PropTypes.number,
	series: PropTypes.array,
	maxPoints: PropTypes.number,
	scales: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array]),
};

export default ChartCDN;
