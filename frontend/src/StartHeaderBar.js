import React, { Component } from 'react';

import './StartHeaderBar.css';
import CompleteWorkout from './CompleteWorkout';


class StartHeaderBar extends Component {
  render() {
    return (
      <div className="start_header_div">
        <div>
          <img className='unicorn' src="https://cdn.pixabay.com/photo/2017/01/25/08/11/unicorn-2007266_1280.png"/>
          <h1 className="ten_x_header">
          Ten-X Muscles
          </h1>
        </div>
        <div className="status">
          You have exercised for 28 of the past 30 days
        </div>
      </div>

    );
  }
}

export default StartHeaderBar;