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

  readExercisesForType(userId, type) {
    const u = [];

    return this.readUser(userId)
      .then(user => u.push(user) && this._backend.readAll('/exercises/'))
      .then(exercises => {
        const keys = Object.keys(exercises).filter(e =>
          u[0].Exercises && e in u[0].Exercises && exercises[e].Type === type
        );
        return keys.map(key => exercises[key]);
      });
  }

  readCompletedExercisesForType(userId, type) {
    const u = [];

    return this.readUser(userId)
      .then(user => u.push(user) && this._backend.readAll('/exercises/'))
      .then(exercises => {
        const keys = Object.keys(exercises).filter(e =>
          u[0].CurrentWorkoutExercises && e in u[0].CurrentWorkoutExercises && exercises[e].Type === type
        );
        return keys.map(key => exercises[key]);
      });
  }

  countExercisesForType(userId, type) {
    return this.readExercisesForType(userId, type)
      .then(result => result.length);
  }

  countCompletedExercisesForType(userId, type) {
    return this.readCompletedExercisesForType(userId, type)
      .then(result => result.length);
  }
}

export const api = new API();
