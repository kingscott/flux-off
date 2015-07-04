'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libMixinsCreateActions = require('../../../lib/Mixins/createActions');

var _libMixinsCreateActions2 = _interopRequireDefault(_libMixinsCreateActions);

var _libMixinsActionDispatcherMixin = require('../../../lib/Mixins/ActionDispatcherMixin');

var _libMixinsActionDispatcherMixin2 = _interopRequireDefault(_libMixinsActionDispatcherMixin);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var actions = (0, _libMixinsCreateActions2['default'])('clicked');

var Button = _react2['default'].createClass({
  displayName: 'Button',

  mixins: [_libMixinsActionDispatcherMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'button',
      primary: false,
      label: ''
    };
  },

  onClick: function onClick(event) {
    this.dispatch(actions.clicked);
    alert('I\'ve been clicked!');
  },

  render: function render() {
    return _react2['default'].createElement(
      'button',
      { type: this.props.type, onClick: this.onClick },
      this.props.label
    );
  }

});

exports['default'] = Button;
module.exports = exports['default'];