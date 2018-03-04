import React, { Component } from 'react'
import HomePage from './HomePage';
import ExerciseListPage from './ExerciseListPage';
import StartPage from './StartPage';
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
            <Route path='/home' component={HomePage} />
            <Route path='/' component={StartPage} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App