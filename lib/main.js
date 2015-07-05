'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var run = function run() {
  _react2['default'].render(_react2['default'].createElement(_app2['default'], null), document.getElementById('test'));
};

var onReady = new Promise(function (resolve) {
  window.addEventListener('DOMContentLoaded', resolve);
});

Promise.all([onReady]).then(run);