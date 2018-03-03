'use strict';

const FirebaseProvider = require('./FirebaseProvider');

class API {
  constructor(firebase) {
    this._backend = new FirebaseProvider(firebase);
  }

  reset() {
    return this._backend.remove('/', '');
  }

  createUser() {
    const data = {
      IsInWorkout: false
    };

    return this._backend.create('/users/', data);
  }

  readUser(userId) {
    return this._backend.readOne('/users/', userId);
  }

  readUsers() {
    return this._backend.readAll('/users/');
  }

  startWorkout(userId) {
    const now = Date.now();
    const data = {
      IsInWorkout: true,
      WorkoutStartTime: now,
      CurrentWorkoutExercises: [],
      WorkoutSchedule: {}
    };
    data.WorkoutSchedule[now] = true;

    return this._backend.update('/users/', userId, data);
  }

  getTimeOfWorkoutStart(userId) {
    return this._backend.readOne('/users/', userId)
      .then(user => user.IsInWorkout ? user.WorkoutStartTime : -1);
  }

  endWorkout(userId) {
    const data = {
      IsInWorkout: false
    };

    return this._backend.update('/users/', userId, data);
  }
}

module.exports = API;
