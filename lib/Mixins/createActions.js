"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createActions = function createActions() {
  for (var _len = arguments.length, actions = Array(_len), _key = 0; _key < _len; _key++) {
    actions[_key] = arguments[_key];
  }

  return actions.reduce(function (o, n) {
    o[n] = n;
    return o;
  }, {});
};

exports["default"] = createActions;
module.exports = exports["default"];