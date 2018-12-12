import React, { Component } from 'react';
import ConfiguratedRichtext from './ConfiguratedRichtext';


class ConfigSample extends Component {
  render() {
    return (
      <div className='app-box'>
        <p>Pre-configured richtext with full toolbar</p>
        <ConfiguratedRichtext />
      </div>
    );
  }
}

export default ConfigSample;
