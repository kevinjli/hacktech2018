import React, { Component } from 'react';
import './ExerciseCell.css';

class ExerciseListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {complete: false};
  }

  completeExerciseToggle() {
    this.setState({'complete': !this.state.complete});
  }

  render() {
    const borderClassName = this.state.complete ? "completed-border" : "";
    return (
      <div className={`exercise-cell ${borderClassName}`} onClick={this.completeExerciseToggle.bind(this)}>
        <img
          className="exercise-cell-image"
          src="https://trainwithpg.com/wp-content/uploads/2017/01/insigniabenchpressv3_-2-e1500232088616.png"
          />
        <div
          className="exercise-cell-text">
          Bench Press
          <p className="exercise-cell-subtext">
            3 Sets | 3 Reps | 70 lb
          </p>
        </div>
      </div>
    );
  }
}

export default ExerciseListPage;