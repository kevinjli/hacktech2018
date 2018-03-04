import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import CompleteWorkout from './CompleteWorkout';
import ExerciseCell from './ExerciseCell';
import './ExerciseCells.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ExerciseCells extends Component {
  render() {
    return (
      <div className="table-view-exercise">
        <MuiThemeProvider><ExerciseCell /></MuiThemeProvider>
      </div>
    );
  }
}

export default ExerciseCells;