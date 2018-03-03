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
        <div>
          <Switch>
            <Route path='/' component={HomePage} />
            <Route path='/group/:type' component={ExerciseListPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App