'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Anchor = require('./Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

exports['default'] = {
  Anchor: _Anchor2['default'],
  Button: _Button2['default'],
  TextField: _TextField2['default']
};
var config = {
  name: 'core',
  components: {
    Anchor: {
      name: 'Anchor',
      props: {
        source: { name: 'Source', type: 'string', 'default': '' },
        target: { name: 'Target', type: 'string', 'default': '_blank' }
      }
    },
    Button: {
      name: 'Button',
      props: {
        label: { name: 'label', type: 'string', 'default': '' },
        fontSize: { name: 'Font Size', type: 'string', 'default': '10px' }
      }
    },
    TextField: {
      name: 'Text Field',
      props: {
        placeholder: { name: 'Placeholder', type: 'string' },
        fontSize: { name: 'Font Size', type: 'string' },
        color: { name: 'Font Color', type: 'string' }
      }
    }
  }
};
exports.config = config;