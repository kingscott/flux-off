import forOwn from 'lodash/object/forOwn';

var prefix = 'ID_';
var lastId = 1;

class ActionDispatcher {

  constructor () {
    this.callbacks = {};
  }

  register (callback) {
    var id = prefix + lastId;
    lastId += 1;
    this.callbacks[id] = callback;
    return this.unregister.bind(this, id);
  }

  unregister (id) {
    delete this.callbacks[id];
  }

  dispatch (namespace, actionType, payload) {
    forOwn(this.callbacks, (callback) => {
      callback(namespace, actionType, payload);
    });
  }

}

export default ActionDispatcher;
