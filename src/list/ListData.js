import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List as ListDHX, DataCollection } from "dhx-suite";

import "dhx-suite/codebase/suite.min.css";

class List extends Component {
  componentDidMount() {
    let { css, height, template, itemHeight, virtual, keyNavigation, data } = this.props
    this.list = new ListDHX(this.el, {
      css: css,
      data: data,
      template: template, 
      height: height,
      itemHeight: itemHeight,
      virtual: virtual,
      keyNavigation: keyNavigation
    });
  }

  componentWillUnmount() {
    this.list.destructor();
  }
  render() {
    return (
      <div style={{
          height: 400
        }}
        ref={el => this.el = el} > 
      </div>
    );
  }
} 

class ListData extends PureComponent {
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

    this.data.load('./static/dataview.json').then(() => {
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
    this.data.remove(this.data.getId(0))
  }
  handleReset() {
    this.data.load('./static/dataview.json')
  }
  render() {
    return ( 
      <div>
        <List 
          css={"dhx_widget--bordered dhx_widget--bg_white"}
          template={item => `<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.title}</strong> <span>${item.short}</span></div>`}
          height={400}
          itemHeight={70}
          virtual={false}
          data={this.data}
          keyNavigation={true}
        />
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button" onClick={() => this.handleRemoveItem()}>
             Remove first of {this.state.itemsCount} items
          </button>
          <button className="button" onClick={() => this.handleReset()} disabled={this.state.itemsCount !== 0}>
            Reset 
          </button>
        </div>
      </div>
    );
  }
}
List.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(DataCollection)
  ]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
  css: PropTypes.string,
  virtual: PropTypes.bool,
  height: PropTypes.number,
  itemHeight: PropTypes.number,
};

export default ListData;