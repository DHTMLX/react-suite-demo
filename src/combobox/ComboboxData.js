import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";

import "dhx-suite/codebase/suite.min.css";

class Combobox extends Component {
  componentDidMount() {
    let { 
      multiselection, 
      label,
      data,
      labelInline,
      labelWidth,
      selectAllButton,
      required,
      showItemsCount,
      virtual,
      placeholder, 
    } = this.props
    this.combobox = new ComboboxDHX(this.el, {
      data: data,
      multiselection: multiselection,
      label: label,
      labelInline: labelInline,
      labelWidth: labelWidth,
      selectAllButton: selectAllButton,
      required: required,
      showItemsCount: showItemsCount,
      virtual: virtual,
      placeholder: placeholder,
    })
  }
  componentWillUnmount() {
    // this.combobox.destructor();
  }
  render() {
    return (
      <div style={{minWidth: 400, textAlign: 'left'}} ref={el => this.el = el}></div>
    );
  }
} 
class ComboboxData extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      itemsCount: null,
    }
    this.data = new DataCollection()

    this.data.events.on('load', () => {
      this.setState({
        itemsCount: this.data.getLength(),
      })
    })

    this.data.load('./static/combobox.json').then(() => {
      this.data.events.on('change', () => {
        this.setState({
          itemsCount: this.data.getLength(),
        })
      })
    })
  }

  componentWillUnmount() {
    this.data.events.detach('load')
  }
  handleRemoveItem() {
    this.data.remove(this.data.getId(this.data.getLength() - 1))
  }
  handleReset() {
    this.data.load('./static/combobox.json')
  }
  render() {
    return ( 
      <div>
        <Combobox 
          data={this.data}
          multiselection={true}
          label={"DHX-react combobox"}
          labelInline={false}
          labelWidth={150}
          selectAllButton={true}
          required={true}
          showItemsCount={true}
          virtual={true}
          placeholder={"Click to choose"}
        />
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button" onClick={() => this.handleRemoveItem()}>
             Remove one of {this.state.itemsCount} items
          </button>
          <button className="button" onClick={() => this.handleReset()} disabled={this.state.itemsCount !== 0}>
            Reset 
          </button>
        </div>
      </div>
    );
  }
}
Combobox.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(DataCollection)
  ]),
	itemsInRow: PropTypes.number,
	gap: PropTypes.number,
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
};

export default ComboboxData;