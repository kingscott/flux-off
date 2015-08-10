'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashObjectForOwn = require('lodash/object/forOwn');

var _lodashObjectForOwn2 = _interopRequireDefault(_lodashObjectForOwn);

var prefix = 'ID_';
var lastId = 1;

var ActionDispatcher = (function () {
  function ActionDispatcher() {
    _classCallCheck(this, ActionDispatcher);

    this.callbacks = {};
  }

  _createClass(ActionDispatcher, [{
    key: 'register',
    value: function register(callback) {
      var id = prefix + lastId;
      lastId += 1;
      this.callbacks[id] = callback;
      return this.unregister.bind(this, id);
    }
  }, {
    key: 'unregister',
    value: function unregister(id) {
      delete this.callbacks[id];
    }
  }, {
    key: 'dispatch',
    value: function dispatch(namespace, actionType, payload) {
      (0, _lodashObjectForOwn2['default'])(this.callbacks, function (callback) {
        callback(namespace, actionType, payload);
      });
    }
  }]);

  return ActionDispatcher;
})();

exports['default'] = ActionDispatcher;
module.exports = exports['default'];