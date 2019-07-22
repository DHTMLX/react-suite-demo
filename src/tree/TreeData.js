import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Tree extends Component {
  componentDidMount() {
    let { css, data, keyNavigation, autoload, checkbox } = this.props
    this.tree = new TreeDHX(this.el, {
      css: css,
      keyNavigation: keyNavigation,
      autoload: autoload,
      checkbox: checkbox,
      data: data
    })
  }
  componentWillUnmount() {
    this.tree.destructor();
  }
  render() {
    return (
      <div 
        style={{minWidth: 270}}
        ref={el => this.el = el} > 
      </div>
    );
  }
} 
class TreeData extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.data = new TreeCollection();

    this.data.load('./static/tree.json').then(() => {
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
      <div>
        <Tree 
          css={"dhx_widget--bg_white"}
          keyNavigation={true}
          autoload={false}
          checkbox={true}
          data={this.data}
        />
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button" onClick={() => this.handleClickAdd()}>Increment notifications</button>
        </div>
      </div>
    );
  }
}
TreeData.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default TreeData;