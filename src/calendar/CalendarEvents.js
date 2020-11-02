import React, { Component } from "react";
import PropTypes from "prop-types";
import { Calendar as CalendarDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class CalendarEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.calendar = new CalendarDHX(this.el, {
			css: "dhx_widget--bordered",
			value: new Date(),
		});
		this.calendar.events.on("change", id => this.setState({ event: "change", item: id.toString() }));
		this.calendar.events.on("dateMouseOver", date =>
			this.setState({ event: "dateMouseOver", item: date.toString() })
		);
		this.calendar.events.on("beforeChange", id =>
			this.setState({ event: "change", item: id.toString() })
		);
		this.calendar.events.on("cancelClick", () => this.setState({ event: "cancelClick" }));
		this.calendar.events.on("modeChange", mode => this.setState({ event: "modeChange", item: mode }));
		this.calendar.events.on("monthSelected", month =>
			this.setState({ event: "monthSelected", item: month + 1 + "" })
		);
		this.calendar.events.on("yearSelected", year =>
			this.setState({ event: "yearSelected", item: year.toString() })
		);
	}
	componentWillUnmount() {
		this.calendar && this.calendar.destructor();
	}
	render() {
		return (
			<div style={{ width: "100%" }}>
				<div
					style={{ width: "100%", display: "flex", justifyContent: "center" }}
					ref={el => (this.el = el)}
				></div>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button button--bordered">
						{this.state.event ? `Event: ${this.state.event}` : "Click to widget"}
					</button>
					<button className="button button--bordered">
						Item: {this.state.item ? this.state.item : ""}
					</button>
				</div>
			</div>
		);
	}
}

CalendarEvents.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
	date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
	css: PropTypes.string,
	mark: PropTypes.func,
	disabledDates: PropTypes.func,
	weekStart: PropTypes.oneOf(["monday", "sunday"]),
	weekNumbers: PropTypes.bool,
	mode: PropTypes.oneOf(["calendar", "year", "month", "timepicker"]),
	timePicker: PropTypes.bool,
	dateFormat: PropTypes.string,
	timeFormat: PropTypes.oneOf([24, 12]),
	thisMonthOnly: PropTypes.bool,
	width: PropTypes.string,
	range: PropTypes.bool,
};

export default CalendarEvents;
