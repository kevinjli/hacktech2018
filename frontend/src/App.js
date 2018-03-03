import React, { Component } from 'react'
import HomePage from './HomePage';
import ExerciseListPage from './ExerciseListPage';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path='/group/:type' component={ExerciseListPage} />
            <Route path='/' component={HomePage} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App