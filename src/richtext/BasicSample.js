import React, { Component } from 'react';
import RichtextComponent from "./Richtext";


class BasicSample extends Component {
  render() {
    return (
      <div className='app-box'>
        <p>Classic mode</p>
        <RichtextComponent mode="classic"></RichtextComponent>

        <hr />
        <p>Document mode</p>
        <RichtextComponent mode="document"></RichtextComponent>
      </div>
    );
  }
}

export default BasicSample;
