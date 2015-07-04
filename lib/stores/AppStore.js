'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _events = require('events');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibUpdate = require('react/lib/update');

var _reactLibUpdate2 = _interopRequireDefault(_reactLibUpdate);

var _coreAppDispatcher = require('../core/AppDispatcher');

var _coreAppDispatcher2 = _interopRequireDefault(_coreAppDispatcher);

var _constantsActionTypes = require('../constants/ActionTypes');

var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);

var _lodashObjectAssign = require('lodash/object/assign');

var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);

var CHANGE_EVENT = 'change';
var composite = { components: [] };

var AppStore = (0, _lodashObjectAssign2['default'])({}, _events.EventEmitter.prototype, {

  getComposite: function getComposite() {
    return composite;
  },

  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },

  onChange: function onChange(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  off: function off(cb) {
    this.off(CHANGE_EVENT, cb);
  }

});

AppStore.dispatchToken = _coreAppDispatcher2['default'].register(function (action) {

  switch (action.type) {

    case _constantsActionTypes2['default'].SET_COMPOSITE:
      composite = action.composite;
      AppStore.emitChange();
      break;

    case _constantsActionTypes2['default'].LOAD_COMPONENT:
      composite = (0, _reactLibUpdate2['default'])(composite, {
        components: {
          $push: [action.component]
        }
      });
      AppStore.emitChange();
      break;

    default:
    // Do nothing

  }
});

exports['default'] = AppStore;
module.exports = exports['default'];