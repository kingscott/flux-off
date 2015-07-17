'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixinsActionDispatcherMixin = require('../../mixins/ActionDispatcherMixin');

var _mixinsActionDispatcherMixin2 = _interopRequireDefault(_mixinsActionDispatcherMixin);

var _reactLibReactComponentWithPureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');

var _reactLibReactComponentWithPureRenderMixin2 = _interopRequireDefault(_reactLibReactComponentWithPureRenderMixin);

var Anchor = _react2['default'].createClass({
  displayName: 'Anchor',

  mixins: [_mixinsActionDispatcherMixin2['default'], _reactLibReactComponentWithPureRenderMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      source: '',
      target: ''
    };
  },

  render: function render() {
    var href = '' + this.props.sourceType + this.props.source;
    return _react2['default'].createElement(
      'a',
      { href: href, style: this.getStyles(), target: this.props.target },
      this.props.children
    );
  }

});

exports['default'] = Anchor;
module.exports = exports['default'];