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
      itemForSelect: null,
    }
    this.data = new DataCollection()

    this.data.events.on('load', () => {
      this.setState({
        itemForSelect: this.data.getItem(this.data.getId(0)).value
      })
    })

    this.data.load('./static/combobox.json').then(() => {
      this.data.events.on('change', () => {
        this.setState({
          itemForSelect: this.data.getItem(this.data.getId(0)).value,
        })
      })
    })
  }

  componentWillUnmount() {
    this.data.events.detach('load')
  }

  handleClick() {
    this.data.map(() => this.data.update(this.data.getId(0), {$selected: true}))
  }
  // handleReset() {
  //   this.data.map(() => this.data.update(this.data.getId(0), {$selected: false}))
  // }
  render() {
    return ( 
      <div style={{ maxWidth: 400}}>
        <Combobox 
          data={this.data}
          multiselection={false}
          label={"DHX-react combobox"}
          labelInline={false}
          labelWidth={150}
          selectAllButton={true}
          required={true}
          virtual={true}
          placeholder={"Click to choose"}
        />
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button" onClick={() => this.handleClick()}>
            Select {this.state.itemForSelect}
          </button>
          {/* <button className="button" onClick={() => this.handleReset()}>
            Reset 
          </button> */}
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