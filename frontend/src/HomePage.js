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
    const workoutData = {
      Chest: {
        completed: 3,
        total: 6
      },
      Biceps:  {
        completed: 2,
        total: 5
      },
      Triceps:  {
        completed: 2,
        total: 10
      }
    }
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar header_title="
          Workout for 5/5/18" timeStart={this.state.startTime} />
        <ExerciseTypes workoutData={workoutData}/>
        <CompleteWorkout />
      </div>
    );
  }
}

export default HomePage;