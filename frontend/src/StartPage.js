import React, { Component } from 'react';
import StartHeaderBar from './StartHeaderBar';
import StartWorkoutBar from './StartWorkoutBar';
import fetchUserID from './provider/FetchUserID'
class StartPage extends Component {
  render() {
    console.log(fetchUserID())
    return (
      <div style={{"textAlign": "center"}}>
        <StartHeaderBar/>
        <StartWorkoutBar/>
      </div>
    );
  }
}

export default StartPage;