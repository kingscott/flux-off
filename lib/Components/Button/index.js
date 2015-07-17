'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixinsActionDispatcherMixin = require('../../mixins/ActionDispatcherMixin');

var _mixinsActionDispatcherMixin2 = _interopRequireDefault(_mixinsActionDispatcherMixin);

var _mixinsCreateActions = require('../../mixins/createActions');

var _mixinsCreateActions2 = _interopRequireDefault(_mixinsCreateActions);

var _reactLibReactComponentWithPureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');

var _reactLibReactComponentWithPureRenderMixin2 = _interopRequireDefault(_reactLibReactComponentWithPureRenderMixin);

var actions = (0, _mixinsCreateActions2['default'])('clicked');

var Button = _react2['default'].createClass({
  displayName: 'Button',

  mixins: [_mixinsActionDispatcherMixin2['default'], _reactLibReactComponentWithPureRenderMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'button',
      primary: false,
      fontSize: '',
      color: ''
    };
  },

  onClick: function onClick(event) {
    this.dispatch(actions.clicked);
  },

  render: function render() {
    var styles = 'color:' + this.props.color + ';font-size:' + this.props.fontSize;
    return _react2['default'].createElement(
      'button',
      { style: styles, type: this.props.type, onClick: this.onClick },
      this.props.label
    );
  }

});

exports['default'] = Button;
module.exports = exports['default'];