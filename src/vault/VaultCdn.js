import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class Vault extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/vault/3.0/vault.js",
      "https://cdn.dhtmlx.com/vault/3.0/vault.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
      this.vault = new dhx.Vault(this.el, {
        mode: this.props.mode,
        uploader: {
          autosend: this.props.autosend,
          target: this.props.target
        },
        toolbar: this.props.toolbar
      });

      if (this.props.ready)
        this.props.ready(this.vault);

    });
  }
  componentWillUnmount() {
    if (this.vault)
      this.vault.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el} className="widget-box"></div>
    );
  }
}
Vault.propTypes = {
  data: PropTypes.array,
  mode: PropTypes.string,
  autosend: PropTypes.bool,
  target: PropTypes.any,
  toolbar: PropTypes.bool,
  ready: PropTypes.any
};
export default Vault;
