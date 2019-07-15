import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Toolbar extends Component {
  componentDidMount() {
    let { css, data } = this.props
    this.toolbar = new ToolbarDHX(this.el, {
      css: css,
      data: data
    })
  }
  componentWillUnmount() {
    this.toolbar.destructor();
  }
  render() {
    return (
      <div 
        style = {{width: '100%'}}
        ref = {el => this.el = el} > 
      </div>
    );
  }
} 
class ToolbarData extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.data = new TreeCollection();

    this.data.load('./static/toolbar.json').then(() => {
      this.data.events.on('change', () => {
        this.setState({
          count: this.data.getItem('add').count
        })
      })
    })
  }

  handleClickAdd() {
    this.data.update('add', {count: this.data.getItem('add').count + 1})
  }
  handleClickReset() {
    this.data.update('add', {count: 0})
  }

  render() {
    return ( 
      <div style = {{width: '100%'}}>
        <Toolbar 
          css="dhx_widget--bordered dhx_widget--bg_white"
          data={this.data}
        />
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button" onClick={() => this.handleClickAdd()}>Increment notifications</button>
          <button className="button" onClick={() => this.handleClickReset()}>Reset {this.state.count} notifications</button>
        </div>
      </div>
    );
  }
}
ToolbarData.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default ToolbarData;