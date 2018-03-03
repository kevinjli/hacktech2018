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

  async _readJSON(ret, ref, attemptId) {
    const snapshot = await ref.once('value');
    ret.attempt = snapshot.val();

    return ret.attempt;
  }

  async _readList(ret, ref) {
    const snapshot = await ref.once('value');
    ret = snapshot.val();

    return ret;
  }

  async create(path, data) {
    const ref = this._db.ref(path);
    const newItem = ref.push();
    const key = newItem.key;
    await this._writeJSON(newItem, data);

    return key;
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
