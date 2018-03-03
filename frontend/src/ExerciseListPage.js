import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import ExerciseTypes from './ExerciseTypes';
import CompleteWorkout from './CompleteWorkout';

class ExerciseListPage extends Component {
  render() {
    const headerString = `${this.props.exerciseType} Exercises`;
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar header_title={headerString} timeStart="0" />
        <CompleteWorkout />
      </div>
    );
  }
}

export default ExerciseListPage;