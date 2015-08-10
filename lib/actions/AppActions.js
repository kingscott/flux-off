'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _coreAppDispatcher = require('../core/AppDispatcher');

var _coreAppDispatcher2 = _interopRequireDefault(_coreAppDispatcher);

var _constantsActionTypes = require('../constants/ActionTypes');

var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);

exports['default'] = {

  setComposite: function setComposite(composite) {
    _coreAppDispatcher2['default'].dispatch({
      type: _constantsActionTypes2['default'].SET_COMPOSITE,
      composite: composite
    });
  },

  loadComponent: function loadComponent(component) {
    _coreAppDispatcher2['default'].dispatch({
      type: _constantsActionTypes2['default'].LOAD_COMPONENT,
      component: component
    });
  }
};
module.exports = exports['default'];