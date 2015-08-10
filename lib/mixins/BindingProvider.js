'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashLangIsObject = require('lodash/lang/isObject');

var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);

var _lodashLangIsUndefined = require('lodash/lang/isUndefined');

var _lodashLangIsUndefined2 = _interopRequireDefault(_lodashLangIsUndefined);

var _lodashObjectHas = require('lodash/object/has');

var _lodashObjectHas2 = _interopRequireDefault(_lodashObjectHas);

var _reactLibUpdate = require('react/lib/update');

var _reactLibUpdate2 = _interopRequireDefault(_reactLibUpdate);

var _bindingHandlers = require('./bindingHandlers');

var _bindingHandlers2 = _interopRequireDefault(_bindingHandlers);

var BindingProvider = (function () {
  function BindingProvider(scope, lastBindingStamp) {
    _classCallCheck(this, BindingProvider);

    this.scope = scope;
    this.currentBindingStamp = null;
    this.lastBindingStamp = lastBindingStamp;
  }

  _createClass(BindingProvider, [{
    key: 'traverseObject',
    value: function traverseObject(obj, path) {
      var stamp = arguments[2] === undefined ? 0 : arguments[2];

      var value;
      var target = obj;
      var depth;

      for (depth = 0; depth < path.length; depth++) {
        var key = path[depth];

        if ((0, _lodashLangIsUndefined2['default'])(target[key])) {
          break;
        }

        target = target[key];

        if ((0, _lodashLangIsObject2['default'])(target) && (0, _lodashObjectHas2['default'])(target, '$stamp')) {
          target = target.$stamp > stamp ? target.data : undefined;
        }
      }

      if (depth === path.length) {
        value = target;
      }

      return value;
    }
  }, {
    key: 'makeValueAccessor',
    value: function makeValueAccessor(bindingContext) {
      var _this = this;

      return function (value) {
        var unwrappedValue = value;

        if ((0, _lodashLangIsObject2['default'])(value)) {
          if ((0, _lodashObjectHas2['default'])(value, '$current')) {
            unwrappedValue = _this.traverseObject(bindingContext.$current, value.$current);
          } else if ((0, _lodashObjectHas2['default'])(value, '$parent')) {
            unwrappedValue = _this.traverseObject(bindingContext.$parent, value.$parent);
          } else if ((0, _lodashObjectHas2['default'])(value, '$root')) {
            unwrappedValue = _this.traverseObject(bindingContext.$root, value.$root);
          } else if ((0, _lodashObjectHas2['default'])(value, '$currentStamp')) {
            unwrappedValue = _this.traverseObject(bindingContext.$current, value.$currentStamp, _this.lastBindingStamp);
          } else if ((0, _lodashObjectHas2['default'])(value, '$parentStamp')) {
            unwrappedValue = _this.traverseObject(bindingContext.$parent, value.$parentStamp, _this.lastBindingStamp);
          } else if ((0, _lodashObjectHas2['default'])(value, '$rootStamp')) {
            unwrappedValue = _this.traverseObject(bindingContext.$root, value.$rootStamp, _this.lastBindingStamp);
          }
        }

        return unwrappedValue;
      };
    }
  }, {
    key: 'createBindingContext',
    value: function createBindingContext(current, fromContext) {
      var context = {};

      context.$current = current;

      if (fromContext) {
        context.$parent = fromContext.$current;
        context.$root = fromContext.$root;
      } else {
        context.$root = current;
      }

      return context;
    }
  }, {
    key: 'applyBindingContextToComponent',
    value: function applyBindingContextToComponent(component, bindingContext) {
      var _this2 = this;

      var boundComponent = component;
      boundComponent.bindingContext = bindingContext;

      if (component.bindings) {
        var bindingNames = Object.keys(component.bindings).filter(function (name) {
          return !!_bindingHandlers2['default'][name];
        }).sort(function (a, b) {
          return _bindingHandlers2['default'][b].priority - _bindingHandlers2['default'][a].priority;
        });

        var indexOfControlsOwnBindings = bindingNames.map(function (name) {
          return _bindingHandlers2['default'][name].controlsOwnBindings;
        }).indexOf(true);

        var applicableBindings = indexOfControlsOwnBindings >= 0 ? bindingNames.slice(0, indexOfControlsOwnBindings + 1) : bindingNames;

        applicableBindings.forEach(function (name) {
          var handler = _bindingHandlers2['default'][name];
          var options = component.bindings[name];
          if (boundComponent) {
            boundComponent = handler.apply(boundComponent, options, _this2.makeValueAccessor(bindingContext), bindingContext, _this2);
          }
        });
      }

      if (boundComponent && boundComponent.components) {
        var boundChildren = [];
        component.components.forEach(function (child) {
          var boundChild = _this2.applyBindingContextToComponent(child, bindingContext);
          if (boundChild) {
            if (boundChild.forEach) {
              boundChild.forEach(function (c) {
                if (c) {
                  boundChildren.push(c);
                }
              });
            } else {
              boundChildren.push(boundChild);
            }
          }
        });

        boundComponent = (0, _reactLibUpdate2['default'])(boundComponent, {
          components: { $set: boundChildren }
        });
      }

      return boundComponent;
    }
  }, {
    key: 'applyBindings',
    value: function applyBindings(components) {
      var rootComponent = { components: components };
      var bindingContext = this.createBindingContext(this.scope);
      var boundComponents = this.applyBindingContextToComponent(rootComponent, bindingContext).components;

      this.currentBindingStamp = +new Date();

      return boundComponents;
    }
  }, {
    key: 'getStamp',
    value: function getStamp() {
      return this.currentBindingStamp;
    }
  }]);

  return BindingProvider;
})();

exports['default'] = BindingProvider;
module.exports = exports['default'];