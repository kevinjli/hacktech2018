import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './StartWorkoutBar.css';
import {fetchRelativeURL} from './utils/FetchUserID';
import { api } from './provider/API';


class StartWorkoutBar extends Component {
  onLinkClick() {
    api.startWorkout('-L6hunulp8Xw93HEn5DN');
  }
  render() {
    return (
      <Link to ={fetchRelativeURL('/Home')} onClick={this.onLinkClick}>
        <div className="start_workout_div">
          Start Workout
        </div>
       </Link>
    );
  }
}

export default StartWorkoutBar;
