import React, { Component } from 'react';
import {Vault} from "dhx-vault";
import "dhx-vault/codebase/vault.css";

class Vault extends Component {
  componentDidMount() {
    this.vault = new Vault(this.el, {
      data: this.props.data,
      mode: this.props.mode,
      uploader:{
          autosend: this.props.autosend,
          target: this.props.target
      },
      toolbar: this.props.toolbar
    });
  }
  componentWillUnmount() {
    this.vault.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el} className="widget-box"></div>
    );
  }
}

export default Vault;
