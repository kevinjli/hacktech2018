import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import ExerciseTypes from './ExerciseTypes';
import CompleteWorkout from './CompleteWorkout';
import API from './provider/API';
class HomePage extends Component {
  render() {
    console.log(await API.createUser());
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar header_title="
          Workout for 5/5/18" timeStart="0" />
        <ExerciseTypes />
        <CompleteWorkout />
      </div>
    );
  }
}

export default HomePage;