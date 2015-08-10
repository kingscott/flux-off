'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mixinsActionDispatcher = require('../mixins/ActionDispatcher');

var _mixinsActionDispatcher2 = _interopRequireDefault(_mixinsActionDispatcher);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixinsStore = require('../mixins/Store');

var _mixinsStore2 = _interopRequireDefault(_mixinsStore);

var _mixinsBindingProvider = require('../mixins/BindingProvider');

var _mixinsBindingProvider2 = _interopRequireDefault(_mixinsBindingProvider);

var _mixinsCreateActions = require('../mixins/createActions');

var _mixinsCreateActions2 = _interopRequireDefault(_mixinsCreateActions);

var _mixinsGetCompositeDependencies = require('../mixins/getCompositeDependencies');

var _mixinsGetCompositeDependencies2 = _interopRequireDefault(_mixinsGetCompositeDependencies);

var _Composite = require('../Composite');

var _Composite2 = _interopRequireDefault(_Composite);

var myStore = new _mixinsStore2['default']();
var myDispatcher = new _mixinsActionDispatcher2['default']();

var CompositeLoader = _react2['default'].createClass({
  displayName: 'CompositeLoader',

  mixins: [],

  getInitialState: function getInitialState() {
    return {
      bindingProvider: new _mixinsBindingProvider2['default'](myStore.get())
    };
  },

  render: function render() {
    var imports = this.props.imports;
    var boundComponents = this.state.bindingProvider.applyBindings(this.props.composite.components);
    return _react2['default'].createElement(_Composite2['default'], { style: this.getStyles(), components: boundComponents, imports: imports, dispatcher: myDispatcher });
  },

  componentDidMount: function componentDidMount() {
    this.unregisterDispatcher = myDispatcher.register(this.onDispatch);
    myStore.on('change', this.onChange);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unregisterDispatcher();
    myStore.off('change', this.onChange);
  },

  onDispatch: function onDispatch(namespace, actionType, payload) {
    myStore.set(namespace, actionType, payload);
  },

  onChange: function onChange() {
    this.setState({
      bindingProvider: new _mixinsBindingProvider2['default'](myStore.get(), this.state.bindingProvider.getStamp())
    });
  }

});

exports['default'] = CompositeLoader;
module.exports = exports['default'];