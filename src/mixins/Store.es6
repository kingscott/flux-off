import immuatableUpdate from 'react/lib/update';
import EventEmitter from 'wolfy87-eventemitter';

var CHANGE_EVENT = 'change';

class Store extends EventEmitter {

  constructor () {
    super();
    this.store = {};
  }

  get () {
    return this.store;
  }

  set (namespace, key, value) {
    this.store[namespace] = this.store[namespace] || {};
    this.store = immuatableUpdate(this.store, {
      [namespace]: {
        [key]: { $set: value }
      }
    });
    this.emitChange();
  }

  emitChange () {
    this.emit(CHANGE_EVENT);
  }

}

export default Store;
