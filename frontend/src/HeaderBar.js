import React, { Component } from 'react';
import './HeaderBar.css';
import {MdArrowBack} from 'react-icons/lib/md';
import { Router} from 'react-router-dom';

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
  goBack() {
    window.history.back();
  }
  render() {
    const workoutTime = `${this.calculateTimeDeltaInMinutes()} Minutes since workout started`
    const styles = {};
    if (this.props.hideWorkoutTime) {
      styles['top'] = "10px";
    }
    return (
      <div className="header_div">
        <div className="back-div" onClick={this.goBack.bind(this)} style={styles}>
          <img className="back-button" src="https://png.icons8.com/android/96/ffffff/circled-left.png" />
        </div>
        <div class="content-header-div">
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