import React, { Component } from 'react';

import './HeaderBar.css';



class HeaderBar extends Component {
  constructor(props){
    super(props);

    this.state = { time: Date.now() };
  }
  tick() {
    this.setState({time: Date.now()})
  }
  calculateTimeDeltaInMinutes() {
    return Number.parseInt((Date.now() - this.props.timeStart)/60000);
  }
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="header_div">
        <div className="workout_header">
          Workout for {this.props.date}
        </div>
        <div className="workout_time">
          {this.calculateTimeDeltaInMinutes()} Minutes since workout started
        </div>
      </div>
    );
  }
}

export default HeaderBar;