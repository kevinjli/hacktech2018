import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './StartWorkoutBar.css';
import {fetchRelativeURL} from './utils/FetchUserID';


class StartWorkoutBar extends Component {
  onLinkClick() {
  	console.log('Clicked!')
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