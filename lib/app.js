// imports ...
// import AppStore from './stores/AppStore';
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _actionsAppActions = require('./actions/AppActions');

var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

var _CompositeEditor = require('./CompositeEditor');

var _CompositeEditor2 = _interopRequireDefault(_CompositeEditor);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixinsCreateActions = require('./mixins/createActions');

var _mixinsCreateActions2 = _interopRequireDefault(_mixinsCreateActions);

var actions = (0, _mixinsCreateActions2['default'])('value');

var getComponents = function getComponents(arr) {
  return Object.keys(arr);
};

var getAppState = function getAppState() {
  return {};
};

// let CompositeLoader = components.CompositeLoader;

var App = _react2['default'].createClass({
  displayName: 'App',

  mixins: [],

  // getInitialState () {
  //   // return getAppState();
  // },

  // onChange2 (event) {
  //   let value = event.target.value;
  //   let ret = config.components[value];
  //   let props = Object.keys(ret.props);
  //   let component = { type: '', props: {} };
  //   component.type = value;
  //   props.forEach((elem, index) => {
  //     component.props[elem] = '';
  //   });
  //   AppActions.loadComponent(component);
  // },

  render: function render() {
    // let comp = getComponents(config.components);
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'select',
        null,
        _react2['default'].createElement('option', { value: '' })
      ),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement(_CompositeEditor2['default'], null)
    );
  }
});

// { comp.map((str) => {
//   return <option value={str}>{str}</option>;
// }) }

exports['default'] = App;
module.exports = exports['default'];

// composite: AppStore.getComposite()