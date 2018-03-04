import React, { Component } from 'react';
import ExerciseType from './ExerciseType';

import './ExerciseTypes.css';
import ExerciseTypesList from './fixtures/exerciseTypes'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ExerciseTypes extends Component {

  getNumExercisesCompleted(exerciseType) {
    if (!this.props.workoutData[exerciseType.name])
      return 0;
    else
      return this.props.workoutData[exerciseType.name].completed || 0;
  }

  getNumExercisesTotal(exerciseType) {
    if (!this.props.workoutData[exerciseType.name])
      return 0;
    else
      return this.props.workoutData[exerciseType.name].total || 0;
  }

  generateExerciseComponents() {
    let exerciseTypes = [];
    for (const exerciseType of ExerciseTypesList.data) {
      exerciseTypes.push(
        <ExerciseType
          imageName={exerciseType.image}
          completed={this.getNumExercisesCompleted(exerciseType)}
          total={this.getNumExercisesTotal(exerciseType)}
          key={exerciseType.name}
          type={exerciseType.name}
          backgroundColor={exerciseType.background_color}
        />
      );
    }
    return exerciseTypes;
  }


  render() {
    return (
      <MuiThemeProvider >
        <div className="exercise-total-component-div">
          {this.generateExerciseComponents()}
          <FloatingActionButton className="floating-create-exercise-button" label="Default" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ExerciseTypes;