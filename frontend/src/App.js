import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderBar from './HeaderBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar date="5/5/18" timeStart="0" />
        <header className="App-header">
          <img src="https://pbs.twimg.com/profile_images/3442935754/f3aa02e5837b22398e0be978e60e3bb5_400x400.jpeg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
