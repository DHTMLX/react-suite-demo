import React, { Component } from "react";
import PropTypes from "prop-types";
import { Chart as ChartDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class ChartConfigured extends Component {
	componentDidMount() {
		this.chart = new ChartDHX(this.el, {
			type: "spline",
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
	}
	componentWillUnmount() {
		this.chart && this.chart.destructor();
	}
	render() {
		return <div style={{ width: 500, height: 400 }} ref={el => (this.el = el)}></div>;
	}
}

ChartConfigured.propTypes = {
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
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
};

export default ChartConfigured;
