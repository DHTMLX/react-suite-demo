import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid as GridDHX, DataCollection } from "dhx-suite";

class GridEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			id: "",
		};
	}
	componentDidMount() {
		this.grid = new GridDHX(this.el, {
			columns: [
				{ minWidth: 200, id: "country", header: [{ text: "Country" }] },
				{ minWidth: 125, id: "population", header: [{ text: "Population" }] },
				{ minWidth: 125, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
				{ minWidth: 125, id: "netChange", header: [{ text: "Net Change" }] },
				{ minWidth: 125, id: "destiny", header: [{ text: "Density (P/Km²)" }] },
				{ minWidth: 125, id: "area", header: [{ text: "Land Area (Km²)" }] },
				{ minWidth: 125, id: "migrants", header: [{ text: "Migrants (net)" }] },
				{ minWidth: 125, id: "fert", header: [{ text: "Fert. Rate" }] },
				{ minWidth: 125, id: "age", header: [{ text: "Med. Age" }] },
				{ minWidth: 125, id: "urban", header: [{ text: "Urban Pop" }] },
			],
			adjust: true,
			selection: true,
			editable: true,
			resizable: true,
		});
		this.grid.data.load(`${process.env.PUBLIC_URL}/static/grid.json`);

		this.grid.events.on("scroll", id => this.setState({ event: "scroll", id: id.x + " " + id.y }));
		this.grid.events.on("sort", id => this.setState({ event: "sort", id: id }));
		this.grid.events.on("cellClick", item => this.setState({ event: "cellClick", id: item.country }));
		this.grid.events.on("AfterEditEnd", () => this.setState({ event: "AfterEditEnd" }));
		this.grid.events.on("AfterEditStart", () => this.setState({ event: "AfterEditStart" }));
		this.grid.events.on("AfterKeyDown", () => this.setState({ event: "AfterKeyDown" }));
		this.grid.events.on("AfterResizeEnd", () => this.setState({ event: "AfterResizeEnd" }));
		this.grid.events.on("BeforeEditEnd", () => this.setState({ event: "BeforeEditEnd" }));
		this.grid.events.on("BeforeEditStart", () => this.setState({ event: "BeforeEditStart" }));
		this.grid.events.on("BeforeKeyDown", () => this.setState({ event: "BeforeKeyDown" }));
		this.grid.events.on("BeforeResizeStart", () => this.setState({ event: "BeforeResizeStart" }));
		this.grid.events.on("cellDblClick", item =>
			this.setState({ event: "cellDblClick", id: item.country })
		);
		this.grid.events.on("cellMouseDown", item =>
			this.setState({ event: "cellMouseDown", id: item.country })
		);
		this.grid.events.on("cellMouseOver", item =>
			this.setState({ event: "cellMouseOver", id: item.country })
		);
		this.grid.events.on("cellRightClick", item =>
			this.setState({ event: "cellRightClick", id: item.country })
		);
		this.grid.events.on("filterChange", item =>
			this.setState({ event: "filterChange", id: item.country })
		);
		this.grid.events.on("footerCellClick", item =>
			this.setState({ event: "footerCellClick", id: item.country })
		);
		this.grid.events.on("footerCellDblClick", item =>
			this.setState({ event: "footerCellDblClick", id: item.country })
		);
		this.grid.events.on("footerCellMouseDown", item =>
			this.setState({ event: "footerCellMouseDown", id: item.country })
		);
		this.grid.events.on("footerCellMouseOver", item =>
			this.setState({ event: "footerCellMouseOver", id: item.country })
		);
		this.grid.events.on("footerCellRightClick", item =>
			this.setState({ event: "footerCellRightClick", id: item.country })
		);
		this.grid.events.on("headerCellClick", item =>
			this.setState({ event: "headerCellClick", id: item.country })
		);
		this.grid.events.on("headerCellDblClick", item =>
			this.setState({ event: "headerCellDblClick", id: item.country })
		);
		this.grid.events.on("headerCellMouseDown", item =>
			this.setState({ event: "headerCellMouseDown", id: item.country })
		);
		this.grid.events.on("headerCellMouseOver", item =>
			this.setState({ event: "headerCellMouseOver", id: item.country })
		);
		this.grid.events.on("headerCellRightClick", item =>
			this.setState({ event: "headerCellRightClick", id: item.country })
		);
		this.grid.events.on("beforeRowDrag", () => this.setState({ event: "beforeRowDrag" }));
		this.grid.events.on("dragRowStart", () => this.setState({ event: "dragRowStart" }));
		this.grid.events.on("dragRowOut", () => this.setState({ event: "dragRowOut" }));
		this.grid.events.on("dragRowIn", () => this.setState({ event: "dragRowIn" }));
		this.grid.events.on("canRowDrop", () => this.setState({ event: "canRowDrop" }));
		this.grid.events.on("cancelRowDrop", () => this.setState({ event: "cancelRowDrop" }));
		this.grid.events.on("beforeRowDrop", () => this.setState({ event: "beforeRowDrop" }));
		this.grid.events.on("afterRowDrop", () => this.setState({ event: "afterRowDrop" }));
		this.grid.events.on("afterRowDrag", () => this.setState({ event: "afterRowDrag" }));
		this.grid.events.on("beforeColumnDrag", () => this.setState({ event: "beforeColumnDrag" }));
		this.grid.events.on("dragColumnStart", () => this.setState({ event: "dragColumnStart" }));
		this.grid.events.on("dragColumnOut", () => this.setState({ event: "dragColumnOut" }));
		this.grid.events.on("dragColumnIn", () => this.setState({ event: "dragColumnIn" }));
		this.grid.events.on("canColumnDrop", () => this.setState({ event: "canColumnDrop" }));
		this.grid.events.on("cancelColumnDrop", () => this.setState({ event: "cancelColumnDrop" }));
		this.grid.events.on("beforeColumnDrop", () => this.setState({ event: "beforeColumnDrop" }));
		this.grid.events.on("afterColumnDrop", () => this.setState({ event: "afterColumnDrop" }));
		this.grid.events.on("afterColumnDrag", () => this.setState({ event: "afterColumnDrag" }));
		this.grid.events.on("beforeColumnHide", () => this.setState({ event: "beforeColumnHide" }));
		this.grid.events.on("afterColumnHide", () => this.setState({ event: "afterColumnHide" }));
		this.grid.events.on("beforeColumnShow", () => this.setState({ event: "beforeColumnShow" }));
		this.grid.events.on("afterColumnShow", () => this.setState({ event: "afterColumnShow" }));
		this.grid.events.on("beforeRowHide", () => this.setState({ event: "beforeRowHide" }));
		this.grid.events.on("afterRowHide", () => this.setState({ event: "afterRowHide" }));
		this.grid.events.on("beforeRowShow", () => this.setState({ event: "beforeRowShow" }));
		this.grid.events.on("afterRowShow", () => this.setState({ event: "afterRowShow" }));
		this.grid.events.on("beforeUnSelect", () => this.setState({ event: "beforeUnSelect" }));
		this.grid.events.on("afterUnSelect", () => this.setState({ event: "afterUnSelect" }));
		this.grid.events.on("beforeSelect", () => this.setState({ event: "beforeSelect" }));
		this.grid.events.on("afterSelect", () => this.setState({ event: "afterSelect" }));
	}
	componentWillUnmount() {
		this.grid && this.grid.destructor();
	}
	render() {
		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<div style={{ width: "100%", height: "450px" }} ref={el => (this.el = el)}></div>
				<div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
					<button className="button button--bordered">
						{this.state.event ? `Event: ${this.state.event}` : "Click to widget"}
					</button>
					<button className="button button--bordered">
						Item: {this.state.id ? this.state.id : ""}
					</button>
				</div>
			</div>
		);
	}
}

GridEvents.propTypes = {
	columns: PropTypes.array,
	spans: PropTypes.array,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(DataCollection)]),
	headerRowHeight: PropTypes.number,
	footerRowHeight: PropTypes.number,
	adjust: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
	rowHeight: PropTypes.number,
	type: PropTypes.oneOf(["tree"]),
	width: PropTypes.number,
	height: PropTypes.number,
	sortable: PropTypes.bool,
	rowCss: PropTypes.func,
	splitAt: PropTypes.number,
	selection: PropTypes.bool,

	autoWidth: PropTypes.bool,
	css: PropTypes.string,

	$headerLevel: PropTypes.number,
	$footerLevel: PropTypes.number,
	$totalWidth: PropTypes.number,
	$totalHeight: PropTypes.number,
	$colspans: PropTypes.bool,
	$footer: PropTypes.bool,
};

export default GridEvents;
