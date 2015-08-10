'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixinsCreateActions = require('../../mixins/createActions');

var _mixinsCreateActions2 = _interopRequireDefault(_mixinsCreateActions);

var _mixinsActionDispatcherMixin = require('../../mixins/ActionDispatcherMixin');

var _mixinsActionDispatcherMixin2 = _interopRequireDefault(_mixinsActionDispatcherMixin);

var actions = (0, _mixinsCreateActions2['default'])('value');

var TextField = _react2['default'].createClass({
  displayName: 'TextField',

  mixins: [_mixinsActionDispatcherMixin2['default']],

  onChange: function onChange(event) {
    var value = event.target.value;
    this.dispatch(actions.value, event.target.value);
  },

  render: function render() {
    var styles = 'color:' + this.props.color + ';font-size:' + this.props.fontSize;
    return _react2['default'].createElement('input', { type: 'text', placeholder: this.props.placeholder, style: styles, onChange: this.onChange });
  }

});

exports['default'] = TextField;
module.exports = exports['default'];