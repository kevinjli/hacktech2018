import React, { Component } from 'react';
import StartHeaderBar from './StartHeaderBar';
import StartWorkoutBar from './StartWorkoutBar';

class StartPage extends Component {
  render() {
    return (
      <div style={{"textAlign": "center"}}>
        <StartHeaderBar/>
        <StartWorkoutBar/>
      </div>
    );
  }
}

export default StartPage;