import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import ExerciseTypes from './ExerciseTypes';
import CompleteWorkout from './CompleteWorkout';
import { api } from './provider/API';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    api.getTimeOfWorkoutStart('-L6hunulp8Xw93HEn5DN')
      .then(startTime => this.setState({startTime}));
  }

  render() {
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar header_title="
          Workout for 5/5/18" timeStart={this.state.startTime} />
        <ExerciseTypes />
        <CompleteWorkout />
      </div>
    );
  }
}

export default HomePage;