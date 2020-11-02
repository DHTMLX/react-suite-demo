import React, { Component } from "react";
import PropTypes from "prop-types";
import { Chart as ChartDHX, DataCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Chart extends Component {
	componentDidMount() {
		let { type, scales, series, data, barWidth, maxPoints } = this.props;
		this.chart = new ChartDHX(this.el, {
			type: type,
			scales: scales,
			series: series,
			maxPoints: maxPoints,
			barWidth: barWidth,
			data: data,
		});
	}
	componentWillUnmount() {
		this.chart && this.chart.destructor();
	}
	render() {
		return <div style={{ width: 500, height: 500 }} ref={el => (this.el = el)}></div>;
	}
}

class ChartProps extends Component {
	getData() {
		const data = new DataCollection();
		data.load(`${process.env.PUBLIC_URL}/static/chart.json`);
		return data;
	}
	render() {
		const scales = {
			bottom: {
				text: "month",
			},
			left: {
				maxTicks: 10,
				max: 100,
				min: 0,
			},
		};
		const series = [
			{
				id: "A",
				value: "company C",
				color: "#5E83BA",
				pointType: "circle",
				fill: "#5E83BA",
				barWidth: 35,
			},
		];
		return (
			<Chart
				type="bar"
				scales={scales}
				series={series}
				maxPoints={120}
				barWidth={45}
				data={this.getData()}
			/>
		);
	}
}

ChartProps.propTypes = {
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
	scales: PropTypes.object,
	maxPoints: PropTypes.number,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
};

export default ChartProps;
