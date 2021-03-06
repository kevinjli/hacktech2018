import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import CompleteWorkout from './CompleteWorkout';
import ExerciseCells from './ExerciseCells';
import { api } from './provider/API';
import {fetchUserID} from './utils/FetchUserID';

class ExerciseListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutData: [],
      exerciseType: props.match.params.type
    };

    api.getTimeOfWorkoutStart(fetchUserID())
      .then(startTime => this.setState({startTime}));

    api.readExercisesForType(fetchUserID(), this.state.exerciseType)
      .then(workoutData => {
        console.log(workoutData);
        this.setState({workoutData:workoutData})
    });
  }

  render() {
    console.log(this.state.workoutData);
    const headerString = `${this.state.exerciseType} Exercises`;
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar header_title={headerString} timeStart={this.state.startTime} />
        <ExerciseCells workoutData={this.state.workoutData} />
        <CompleteWorkout />
      </div>
    );
  }
}

export default ExerciseListPage;
