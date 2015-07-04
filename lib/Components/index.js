'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Anchor = require('./Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

exports['default'] = {
  Anchor: _Anchor2['default']
};
var config = {
  name: 'core',
  components: {
    Anchor: {
      name: 'Anchor',
      props: {
        source: { name: 'Source', type: 'string' }
      }
    }
  }
};
exports.config = config;