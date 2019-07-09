import React, { Component } from 'react';
import Calendar from "./Calendar";


class CalendarBasicSample extends Component {
  render() {
    return (
      <div className='app-box'>
        <p>Basic Calendar sample</p>
        <Calendar />
      </div>
    );
  }
}

export default CalendarBasicSample;
