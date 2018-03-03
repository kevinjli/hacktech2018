import React, { Component } from 'react'
import HomePage from './HomePage';
import ExerciseListPage from './ExerciseListPage';
import {
  HashRouter,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={HomePage} />
          <Route path='/address' component={ExerciseListPage} />
        </div>
      </HashRouter>
    )
  }
}

export default App