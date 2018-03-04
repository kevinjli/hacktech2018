import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import ExerciseTypes from './ExerciseTypes';
import CompleteWorkout from './CompleteWorkout';
import exerciseTypesList from './fixtures/exerciseTypesList';
import { api } from './provider/API';
import moment from 'moment'
import {fetchUserID} from './utils/FetchUserID';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutData: {}
    };

    api.getTimeOfWorkoutStart(fetchUserID())
      .then(startTime => this.setState({startTime}));

    const workoutData = {};

    for (const exerciseType of exerciseTypesList.data) {
      workoutData[exerciseType.name] = {};

      api.countExercisesForType(fetchUserID(), exerciseType.name)
        .then(total => workoutData[exerciseType.name].total = total)
        .then(() => api.countCompletedExercisesForType(fetchUserID(), exerciseType.name))
        .then(completed => workoutData[exerciseType.name].completed = completed)
        .then(() => this.setState({workoutData}));
    }
  }

  render() {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    const title = 'Workout for ' + moment(date).format("MMM Do");
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar header_title={title} timeStart={this.state.startTime} />
        <ExerciseTypes workoutData={this.state.workoutData}/>
        <CompleteWorkout />
      </div>
    );
  }
}

export default HomePage;
