import React, { Component } from 'react';
import Spreadsheet from "./Spreadsheet";


class BasicSample extends Component {
  constructor(props) {
    super(props);
    this.spreadsheet = React.createRef();
    this.state = {
      event: ""
    };
  }
  componentDidMount() {
    this.spreadsheet.current.spreadsheet.events.on("afterValueChange", (cell) => {
      this.setState({ event: `Value change in cell ${cell}` });
    });
  }
  render() {
    return (
      <div className='app-box'>
        <p>Basic vault</p>
        <Spreadsheet ref={this.spreadsheet}></Spreadsheet>
        <div>{this.state.event}</div>
      </div>
    );
  }
}

export default BasicSample;
