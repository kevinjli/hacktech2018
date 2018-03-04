import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ExerciseType.css';
import {fetchRelativeURL} from './utils/FetchUserID';


class ExerciseType extends Component {
  render() {
    const styles = {'backgroundColor': this.props.backgroundColor}
    return (
      <Link to={fetchRelativeURL(`/group/${this.props.type}`)} className="exercise_type_div hvr-pulse-shrink" style={styles}>
        <img alt={this.props.imageName} src={this.props.imageName} className="exercise_image"/>
        <div className="exercise_details">
          {this.props.completed}/{this.props.total} {this.props.type}
        </div>
        <div className="exercise_complete">
          Exercises Completed
        </div>
      </Link>
    );
  }
}

export default ExerciseType;