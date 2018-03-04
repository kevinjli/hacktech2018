import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import CompleteWorkout from './CompleteWorkout';
import ExerciseCells from './ExerciseCells';

class ExerciseListPage extends Component {
  render() {
    const exerciseType = this.props.match.params.type;
    const headerString = `${exerciseType} Exercises`;
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar header_title={headerString} timeStart="0" />
        <ExerciseCells />
        <CompleteWorkout />
      </div>
    );
  }
}

export default ExerciseListPage;