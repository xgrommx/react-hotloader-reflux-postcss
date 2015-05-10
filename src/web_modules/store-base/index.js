import Reflux from 'reflux';
import update from 'react/lib/update';

/**
 * These helper methods provide a nice API to
 * interact with data within our data store.
 */
export default Reflux.StoreMethods = {
  _byId: {},

  get(obj) {
    return this._byId[obj];
  },

  getAll() {
    return this._byId;
  },

  _update(id, updates) {
    this._byId = update(this._byId, {
      [id]: {
        $set: updates
      }
    });
  },

  _push(id, updates) {
    this._byId[id] = update(this._byId[id], {
      $push: updates
    });
  },

  _updateDeep(id, prop, updates) {
    this._byId[id] = update(this._byId[id], {
      [prop]: {
        $set: updates
      }
    });
  },

  _merge(id, updates) {
    if (!this._byId[id]) { this._byId[id] = {}; }
    this._byId[id] = update(this._byId[id], {
      $merge: updates
    });
  }
};
