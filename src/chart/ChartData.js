import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Chart as ChartDHX, DataCollection } from "dhx-suite";

import "dhx-suite/codebase/suite.min.css";

class Chart extends PureComponent {
	componentDidMount() {
		const { type, scales, series, data, barWidth, maxPoints } = this.props;
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
		return (
			<div style={{ width: "100%", maxWidth: 1350, height: "500px" }} ref={el => (this.el = el)}></div>
		);
	}
}

class ChartData extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			firstItem: null,
		};
		this.data = new DataCollection();

		this.data.events.on("load", () => {
			this.setState({
				firstItem: this.data.getItem(this.data.getId(0)).month,
				itemsCount: this.data.getLength(),
			});
		});
		this.data.load(`${process.env.PUBLIC_URL}/static/chart.json`).then(() => {
			this.data.events.on("change", () => {
				this.setState({
					firstItem: this.data.getItem(this.data.getId(0))
						? this.data.getItem(this.data.getId(0)).month
						: "",
					itemsCount: this.data.getLength(),
				});
			});
		});
	}
	componentWillUnmount() {
		this.data.events.detach("load");
	}
	handleClick() {
		this.state.itemsCount === 0
			? this.data.load(`${process.env.PUBLIC_URL}/static/chart.json`)
			: this.data.remove(this.data.getId(0));
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
			<div style={{ width: "100%", maxWidth: 650, height: "550px" }}>
				<Chart type="bar" scales={scales} series={series} data={this.data} />
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button" onClick={() => this.handleClick()}>
						{this.state.itemsCount === 0 ? "Reset" : `Remove ${this.state.firstItem} month data`}
					</button>
				</div>
			</div>
		);
	}
}

Chart.propTypes = {
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

export default ChartData;
