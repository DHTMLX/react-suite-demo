import React, { Component } from 'react';
import {DataCollection} from "dhx-vault";

import Vault from "./Vault";

class Pivot extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.files = new DataCollection();
    this.files.events.on("change", () => {
      this.setState({
        count: this.files.getLength()
      });
    });
  }
  render() {
    return (
      <div className='app-box'>
        <p>Data-bound vault</p>
        <Vault data={this.files} className='base-size'></Vault>
        <hr />
        <div className='line'>
          <input type="button" onClick={this.add} value="Add a file" />
          <input type="button" onClick={this.clear} value="Clear all" />
        </div>
        <div className='line'>
          {this.state.count} files added
        </div>
      </div>
    );
  }
  add = () => { 
    this.files.add({ name:"myfile.png", size:24560 });
  }
  clear = () => {
    this.files.removeAll()
  }
}

export default Pivot;
