// import ....
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _actionsAppActions = require('../actions/AppActions');

var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactComponentWithPureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');

var _reactLibReactComponentWithPureRenderMixin2 = _interopRequireDefault(_reactLibReactComponentWithPureRenderMixin);

var fromJSON = function fromJSON(str) {
  var data = undefined;
  try {
    data = JSON.parse(str);
  } catch (e) {
    data = false;
  }
  return data;
};

var toJSON = function toJSON(obj) {
  var data = undefined;
  try {
    data = JSON.stringify(obj, replaceKey, 2);
  } catch (e) {
    console.log(e.toString());
  }
  return data;
};

var replaceKey = function replaceKey(key, value) {
  var invalidKeys = { bindingContext: true, $dispatcher: true };
  return key in invalidKeys ? undefined : value;
};

var CompositeEditor = _react2['default'].createClass({
  displayName: 'CompositeEditor',

  mixins: [_reactLibReactComponentWithPureRenderMixin2['default']],

  getInitialState: function getInitialState() {
    return { compositeString: '' };
  },

  onChange: function onChange(event) {
    var value = event.target.value;
    this.setState({ compositeString: value });
  },

  setComposite: function setComposite() {
    var comp = JSON.parse(this.state.compositeString);
    _actionsAppActions2['default'].setComposite(comp);
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'button',
        { type: 'button', onClick: this.setComposite },
        'Update'
      ),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement('textarea', { rows: '20', cols: '60', value: this.state.compositeString,
        onChange: this.onChange })
    );
  },

  componentWillMount: function componentWillMount() {
    this.setState({
      compositeString: toJSON(this.props.composite)
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState({
      compositeString: toJSON(props.composite)
    });
  }
});

exports['default'] = CompositeEditor;
module.exports = exports['default'];