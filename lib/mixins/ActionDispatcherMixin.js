"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ActionDispathcerMixin = {

  dispatch: function dispatch(actionType) {
    var payload = arguments[1] === undefined ? true : arguments[1];

    this.props.$dispatcher.dispatch(this.props.$address, actionType, { $stamp: +new Date(), data: payload });
  }

};

exports["default"] = ActionDispathcerMixin;
module.exports = exports["default"];