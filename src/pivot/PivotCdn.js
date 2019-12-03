
import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';
import dataset from "./dataset"

class PivotCDN extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/pivot/edge/pivot.js",
      "https://cdn.dhtmlx.com/pivot/edge/pivot.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
      if (this.el) {
        this.pivot = new dhx.Pivot(this.el, {
          data: dataset,
          fields: {
            rows: ["form", "name"],
            columns: ["year"],
            values: [{ id: "oil", method: "count" }, { id: "oil", method: "sum" }],
          },
          fieldList: [
            { id: "name", label: "Name" },
            { id: "year", label: "Year" },
            { id: "continent", label: "Continent" },
            { id: "form", label: "Form" },
            { id: "gdp", label: "GDP" },
            { id: "oil", label: "Oil" },
            { id: "balance", label: "Balance" },
            { id: "when", label: "When", type: "date", format: "%d/%m/%Y" }
          ]
        });
      }
    });
  }
  componentWillUnmount() {
    if (this.pivot) {
			this.pivot.destructor();
		}
  }
  render() {
    return (
      <div ref={el => this.el = el} style={{textAlign: 'left', minHeight: '500px',  width: 1000, marginLeft: 'auto', marginRight: 'auto'}}></div>
    );
  }
}
PivotCDN.propTypes = {
  data: PropTypes.array,
  fields: PropTypes.array,
  fieldList: PropTypes.array,
};
export default PivotCDN;
