import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import CompleteWorkout from './CompleteWorkout';
import ExerciseCell from './ExerciseCell';
import './ExerciseCells.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ExerciseCells extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="table-view-exercise">
        {this.props.workoutData.map(exercise => {
          const name = exercise.Name;
          const imageURL = exercise.ImageURL;

          const last = Math.max(...Object.keys(exercise.Progress));
          const numSets = exercise.Progress[last].NumSets;
          const numReps = exercise.Progress[last].NumReps;
          const weight = exercise.Progress[last].Weight;

          return (
            <MuiThemeProvider>
              <ExerciseCell
              name={name}
              imageURL={imageURL}
              numSets={numSets}
              numReps={numReps}
              weight={weight}
              />
            </MuiThemeProvider>
          )
        })}
      </div>
    );
  }
}

export default ExerciseCells;
