import React, { Component } from 'react';
import Vault from "./Vault";


class BasicSample extends Component {
  render() {
    return (
      <div className='app-box'>
        <p>Basic vault</p>
        <Vault toolbar autosend></Vault>

        <hr />
        <p>Vault without toolbar</p>
        <Vault autosend></Vault>

        <hr />
        <p>Grid mode without auto-send</p>
        <Vault toolbar mode="grid"></Vault>
      </div>
    );
  }
}

export default BasicSample;
