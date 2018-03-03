import React, { Component } from 'react';

import './ExerciseType.css';



class ExerciseType extends Component {
  render() {
    const styles = {'background-color': this.props.backgroundColor}
    return (
      <div className="exercise_type_div" style={styles}>
        <img src={this.props.imageName} className="exercise_image"/>
        <div className="exercise_details">
          {this.props.completed}/{this.props.total} {this.props.type}
        </div>
        <div className="exercise_complete">
          Exercises Completed
        </div>
      </div>
    );
  }
}

export default ExerciseType;