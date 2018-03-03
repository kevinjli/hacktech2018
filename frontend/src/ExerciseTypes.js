import React, { Component } from 'react';
import ExerciseType from './ExerciseType';

import './ExerciseTypes.css';
import ExerciseTypesList from './fixtures/exerciseTypes'

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
      <div>
        {this.generateExerciseComponents()}
      </div>
    );
  }
}

export default ExerciseTypes;