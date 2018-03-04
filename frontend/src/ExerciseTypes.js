import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ExerciseType from './ExerciseType';

import './ExerciseTypes.css';
import exerciseTypesList from './fixtures/exerciseTypesList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fetchRelativeURL} from './utils/FetchUserID';

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
    for (const exerciseType of exerciseTypesList.data) {
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
          <Link to={fetchRelativeURL('/save')} className="">
            <FloatingActionButton className="floating-create-exercise-button" label="Default" />
          </Link>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ExerciseTypes;
