import { EventEmitter } from 'events';
import React from 'react';
import immutableUpdate from 'react/lib/update';
import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import assign from 'lodash/object/assign';

const CHANGE_EVENT = 'change';
let composite = { components: [] };

let AppStore = assign({}, EventEmitter.prototype, {

  getComposite () {
    return composite;
  },

  emitChange () {
    this.emit(CHANGE_EVENT);
  },

  onChange (cb) {
    this.on(CHANGE_EVENT, cb);
  },

  off (cb) {
    this.off(CHANGE_EVENT, cb);
  }

});

AppStore.dispatchToken = AppDispatcher.register((action) => {

  switch(action.type) {

    case ActionTypes.SET_COMPOSITE:
      composite = action.composite;
      AppStore.emitChange();
      break;

    case ActionTypes.LOAD_COMPONENT:
      composite = immutableUpdate(composite, {
        components: {
          $push: [ action.component ]
        }
      });
      AppStore.emitChange();
      break;

    default:
    // Do nothing
    
  }

});

export default AppStore;
