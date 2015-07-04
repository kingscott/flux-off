'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libComponentsIndex = require('../lib/Components/index');

var _libComponentsIndex2 = _interopRequireDefault(_libComponentsIndex);

var _storesAppStore = require('./stores/AppStore');

var _storesAppStore2 = _interopRequireDefault(_storesAppStore);

var _actionsAppActions = require('./actions/AppActions');

var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

var _CompositeEditor = require('./CompositeEditor');

var _CompositeEditor2 = _interopRequireDefault(_CompositeEditor);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _libMixinsCreateActions = require('../lib/Mixins/createActions');

var _libMixinsCreateActions2 = _interopRequireDefault(_libMixinsCreateActions);

var actions = (0, _libMixinsCreateActions2['default'])('value');

var getComponents = function getComponents(arr) {
  return Object.keys(arr);
};

var getAppState = function getAppState() {
  return {
    composite: _storesAppStore2['default'].getComposite()
  };
};

// let CompositeLoader = components.CompositeLoader;

var App = _react2['default'].createClass({
  displayName: 'App',

  mixins: [],

  getInitialState: function getInitialState() {
    return getAppState();
  },

  onChange2: function onChange2(event) {
    var value = event.target.value;
    var ret = _libComponentsIndex.config.components[value];
    var props = Object.keys(ret.props);
    var component = { type: '', props: {} };
    component.type = value;
    props.forEach(function (elem, index) {
      component.props[elem] = '';
    });
    _actionsAppActions2['default'].loadComponent(component);
  },

  render: function render() {
    var comp = getComponents(_libComponentsIndex.config.components);
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'select',
        { onChange: this.onChange2 },
        _react2['default'].createElement('option', { value: '' }),
        comp.map(function (str) {
          return _react2['default'].createElement(
            'option',
            { value: str },
            str
          );
        })
      ),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement(_CompositeEditor2['default'], { composite: this.state.composite }),
      _react2['default'].createElement('br', null)
    );
  },

  updateState: function updateState() {
    this.setState(getAppState());
  },

  componentDidMount: function componentDidMount() {
    _storesAppStore2['default'].onChange(this.updateState);
  },

  componentWillMount: function componentWillMount() {
    _storesAppStore2['default'].off(this.updateState);
  }

});

exports['default'] = App;
module.exports = exports['default'];