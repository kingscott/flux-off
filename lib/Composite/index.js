'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashLangIsString = require('lodash/lang/isString');

var _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);

var Composite = _react2['default'].createClass({
  displayName: 'Composite',

  mixins: [],

  childContextTypes: {
    theme: _react2['default'].PropTypes.object
  },

  renderComponentTree: function renderComponentTree(_ref) {
    var _this = this;

    var address = _ref.address;
    var type = _ref.type;
    var _ref$props = _ref.props;
    var props = _ref$props === undefined ? {} : _ref$props;
    var components = _ref.components;

    var children;

    props.$address = address;
    props.$dispatcher = this.props.dispatcher;

    // TODO: more robust way to detect an import vs regular dom element
    if ((0, _lodashLangIsString2['default'])(type) && type !== 'div') {
      type = this.props.imports && this.props.imports[type];
    }

    if (components && components.length) {
      children = [];
      components.forEach(function (component) {
        var child = _this.renderComponentTree(component);
        if (child) {
          children.push(child);
        }
      });
    }

    return type && (children ? _react2['default'].createElement(type, props, children) : _react2['default'].createElement(type, props));
  },

  render: function render() {
    return this.renderComponentTree({ type: 'div', props: { style: this.props.style }, components: this.props.components });
  }

});

exports['default'] = Composite;
module.exports = exports['default'];