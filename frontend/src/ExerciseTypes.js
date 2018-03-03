import React, { Component } from 'react';
import ExerciseType from './ExerciseType';

import './ExerciseTypes.css';
import ExerciseTypesList from './fixtures/exerciseTypes'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ExerciseTypes extends Component {

  generateExerciseComponents() {
    let exerciseTypes = [];
    for (const exerciseType of ExerciseTypesList.data) {
      exerciseTypes.push(
        <ExerciseType
          imageName={exerciseType.image}
          completed='2'
          total='5'
          type={exerciseType.name}
          backgroundColor={exerciseType.background_color}
        />
      );
    }
    return exerciseTypes;
  }


  render() {
    const styles = {'background-color': this.props.backgroundColor}
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