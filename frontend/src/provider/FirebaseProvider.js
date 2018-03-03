'use strict';

class FirebaseProvider {
  constructor(firebaseService) {
    const config = {
      databaseURL: "https://hacktech2018-po.firebaseio.com",
    };

    this._app = firebaseService.initializeApp(config);
    this._db = this._app.database();
  }

  _writeJSON(ref, options) {
    return ref.set(options);
  }

  _readJSON(ret, ref, attemptId) {
    return ref.once('value')
      .then((snapshot) => ret.attempt = snapshot.val())
      .then(() => ret);
  }

  _readList(ret, ref) {
    return ref.once('value')
      .then((snapshot) => ret = snapshot.val())
      .then(() => ret);
  }

  create(path, data) {
    const ref = this._db.ref(path);
    const newItem = ref.push();
    const key = newItem.key;

    return this._writeJSON(newItem, data).then(() => key);
  }

  readOne(path, key) {
    const ret = {};
    const ref = this._db.ref(path + key);

    return this._readJSON(ret, ref, key);
  }

  readAll(path) {
    const ret = {};
    const ref = this._db.ref(path);

    return this._readList(ret, ref);
  }

  update(path, key, data) {
    return this._db.ref(path + key).update(data);
  }

  remove(path, key) {
    return this._db.ref(path + key).remove();
  }
}

module.exports = FirebaseProvider;
