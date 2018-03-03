'use strict';

import firebase from 'firebase';
import FirebaseProvider from './FirebaseProvider';

class API {
  constructor() {
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

  async getTimeOfWorkoutStart(userId) {
    const user = await this.readUser(userId);

    return user.IsInWorkout ? user.WorkoutStartTime : -1;
  }

  endWorkout(userId) {
    const data = {
      IsInWorkout: false
    };

    return this._backend.update('/users/', userId, data);
  }

  createExercise(name, imageURL, type) {
    const data = {
      Name: name,
      ImageURL: imageURL,
      Type: type
    };

    return this._backend.create('/exercises/', data);
  }

  readExercise(exerciseId) {
    return this._backend.readOne('/exercises/', exerciseId);
  }

  readExercises() {
    return this._backend.readAll('/exercises/');
  }

  addExerciseForUser(userId, exerciseId) {
    const data = {
      Exercises: {}
    };
    data.Exercises[exerciseId] = true;

    return this._backend.update('/users/', userId, data);
  }

  async fetchNumberOfExercisesForType(userId, type) {
    const user = await this.readUser(userId);
    const exercises = await this.readExercises();
    const result = Object.keys(exercises).map(e =>
      user.Exercises && e in user.Exercises && exercises[e].Type == type
    );

    return result.filter(r => r).length;
  }

  async fetchNumberOfCompletedInSessionExercisesForType(userId, type) {
    const user = await this.readUser(userId);
    const exercises = await this.readExercises();
    const result = Object.keys(exercises).map(e =>
      user.CurrentWorkoutExercises && e in user.CurrentWorkoutExercises && exercises[e].Type == type
    );

    return result.filter(r => r).length;
  }
}

export default API;
