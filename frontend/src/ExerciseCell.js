import React, { Component } from 'react';
import './ExerciseCell.css';

class ExerciseListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageURL: props.imageURL,
      name: props.name,
      numSets: props.numSets,
      numReps: props.numReps,
      weight: props.weight,
      complete: false
    };
  }

  completeExerciseToggle() {
    this.setState({'complete': !this.state.complete});
  }

  //https://trainwithpg.com/wp-content/uploads/2017/01/insigniabenchpressv3_-2-e1500232088616.png
  render() {
    const borderClassName = this.state.complete ? "completed-border" : "";
    return (
      <div className={`exercise-cell ${borderClassName}`} onClick={this.completeExerciseToggle.bind(this)}>
        <img
          className="exercise-cell-image"
          src={this.state.imageURL}
          />
        <div
          className="exercise-cell-text">
          {this.state.name}
          <p className="exercise-cell-subtext">
            {this.state.numSets} Sets | {this.state.numReps} Reps | {this.state.weight} lb
          </p>
        </div>
      </div>
    );
  }
}

export default ExerciseListPage;
