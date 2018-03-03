import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderBar from './HeaderBar';
import ExerciseTypes from './ExerciseTypes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar date="5/5/18" timeStart="0" />
        <ExerciseTypes />
      </div>
    );
  }
}

export default App;
