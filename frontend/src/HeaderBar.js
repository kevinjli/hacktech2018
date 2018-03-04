import React, { Component } from 'react';
import './HeaderBar.css';
import {MdArrowBack} from 'react-icons/lib/md';


class HeaderBar extends Component {
  constructor(props){
    super(props);

    this.state = { time: Date.now() };
  }
  tick() {
    this.setState({time: Date.now()})
  }
  calculateTimeDeltaInMinutes() {
    return Number.parseInt((Date.now() - this.props.timeStart)/60000, 10);
  }
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const workoutTime = `${this.calculateTimeDeltaInMinutes()} Minutes since workout started`
    return (
      <div className="header_div">
        <div>

        </div>
        <div>
          <div className="workout_header">
            {this.props.header_title}
          </div>
          <div className="workout_time">
            {this.props.hideWorkoutTime ? '' : workoutTime}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;