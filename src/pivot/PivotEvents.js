import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Pivot as PivotDHX, css } from "dhx-pivot";
import "dhx-pivot/codebase/pivot.min.css";
import dataset from "./dataset"


class PivotEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      id: ''
    }
  }

  componentDidMount() {
    if (!window.dhx || !window.dhx.css) {
      window.dhx = {}
      window.dhx.css = css
    }
        
    this.pivot = new PivotDHX(this.el, {
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

    this.pivot.events.on('itemClick', id => this.setState({event: 'itemClick', id: id}))
    this.pivot.events.on('apply', id => this.setState({event: 'apply', id: id}))
    this.pivot.events.on('change', id => this.setState({event: 'change', id: id}))
    this.pivot.events.on('update', id => this.setState({event: 'update', id: id}))
    this.pivot.events.on('filterApply', id => this.setState({event: 'filterApply', id: id}))
  }

  componentWillUnmount() {
    this.pivot && this.pivot.destructor();
  }

  render() {
    return (
      <Fragment>
        <div ref={el => this.el = el} style={{textAlign: 'left', minHeight: '500px', height: 500, width: 1000, marginLeft: 'auto', marginRight: 'auto' }}></div>
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button button--bordered">{`Event: ${this.state.event}`}</button>
          <button className="button button--bordered">Item:  {this.state.id ? this.state.id : ''}</button>
        </div>
      </Fragment>
    );
  }
}

PivotEvents.propTypes = {
  data: PropTypes.array,
  fields: PropTypes.array,
  fieldList: PropTypes.array,
};

export default PivotEvents;
