import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import ExerciseTypes from './ExerciseTypes';
import CompleteWorkout from './CompleteWorkout';
import exerciseTypesList from './fixtures/exerciseTypesList';
import { api } from './provider/API';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutData: {}
    };

    api.getTimeOfWorkoutStart('-L6hunulp8Xw93HEn5DN')
      .then(startTime => this.setState({startTime}));

    const workoutData = {};

    for (const exerciseType of exerciseTypesList.data) {
      workoutData[exerciseType.name] = {};

      api.fetchNumberOfExercisesForType('-L6hunulp8Xw93HEn5DN', exerciseType.name)
        .then(total => workoutData[exerciseType.name].total = total)
        .then(() => api.fetchNumberOfCompletedInSessionExercisesForType('-L6hunulp8Xw93HEn5DN', exerciseType.name))
        .then(completed => workoutData[exerciseType.name].completed = completed)
        .then(() => this.setState({workoutData}));
    }
  }

  render() {
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar header_title="
          Workout for 5/5/18" timeStart={this.state.startTime} />
        <ExerciseTypes workoutData={this.state.workoutData}/>
        <CompleteWorkout />
      </div>
    );
  }
}

export default HomePage;
