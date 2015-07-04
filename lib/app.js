// import components, { config } from './Components/index';
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _storesAppStore = require('./stores/AppStore');

var _storesAppStore2 = _interopRequireDefault(_storesAppStore);

var _actionsAppActions = require('./actions/AppActions');

var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

var _CompositeEditor = require('./CompositeEditor');

var _CompositeEditor2 = _interopRequireDefault(_CompositeEditor);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// import PureRenderMixin from 'react/addons';

var _MixinsCreateActions = require('./Mixins/createActions');

var _MixinsCreateActions2 = _interopRequireDefault(_MixinsCreateActions);

var actions = (0, _MixinsCreateActions2['default'])('value');

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

  // getInitialState () {
  //   return getAppState();
  // },

  onChange2: function onChange2(event) {},

  render: function render() {
    // let comp = getComponents(config.components);
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'select',
        { onChange: this.onChange2 },
        _react2['default'].createElement('option', { value: '' })
      ),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement(_CompositeEditor2['default'], null),
      _react2['default'].createElement('br', null)
    );
  }

});

exports['default'] = App;
module.exports = exports['default'];

// let value = event.target.value;
// let ret = config.components[value];
// let props = Object.keys(ret.props);
// let component = { type: '', props: {} };
// component.type = value;
// props.forEach((elem, index) => {
//   component.props[elem] = "";
// });
// AppActions.loadComponent(component);
// updateState () {
//   this.setState(getAppState());
// },
//
// componentDidMount () {
//   AppStore.onChange(this.updateState);
// },
//
// componentWillMount () {
//   AppStore.off(this.updateState);
// }

// comp.map((str) => {
//   return <option value={str}>{str}</option>
// })