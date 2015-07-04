'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MixinsActionDispatcherMixin = require('../Mixins/ActionDispatcherMixin');

var _MixinsActionDispatcherMixin2 = _interopRequireDefault(_MixinsActionDispatcherMixin);

// import PureRenderMixin from 'react/addons';

var Anchor = _react2['default'].createClass({
  displayName: 'Anchor',

  mixins: [_MixinsActionDispatcherMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      source: '',
      target: ''
    };
  },

  render: function render() {
    return _react2['default'].createElement('a', { href: this.props.source, target: this.props.target });
  }

});

exports['default'] = Anchor;
module.exports = exports['default'];