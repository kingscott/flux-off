'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashObjectForOwn = require('lodash/object/forOwn');

var _lodashObjectForOwn2 = _interopRequireDefault(_lodashObjectForOwn);

var _lodashLangIsUndefined = require('lodash/lang/isUndefined');

var _lodashLangIsUndefined2 = _interopRequireDefault(_lodashLangIsUndefined);

var _lodashLangIsObject = require('lodash/lang/isObject');

var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);

var _reactLibUpdate = require('react/lib/update');

var _reactLibUpdate2 = _interopRequireDefault(_reactLibUpdate);

var bindingHandlers = {};

bindingHandlers.props = {
  priority: 0,
  apply: function apply(component, options, valueAccessor) {
    var update;

    (0, _lodashObjectForOwn2['default'])(options, function (value, prop) {
      var valueUnwrapped = valueAccessor(value);
      if (!(0, _lodashLangIsUndefined2['default'])(valueUnwrapped) && valueUnwrapped !== component.props[prop]) {
        update = update || { props: {} };
        update.props[prop] = { $set: valueUnwrapped };
      }
    });

    return update ? (0, _reactLibUpdate2['default'])(component, update) : component;
  }
};

bindingHandlers.repeat = {
  priority: 2,
  controlsOwnBindings: true,
  apply: function apply(component, options, valueAccessor, bindingContext, provider) {
    var components;
    var count;
    var data;

    if (!(0, _lodashLangIsObject2['default'])(options)) {
      count = options.count;
    }

    if (options.each) {
      data = valueAccessor(options.each, bindingContext);
      if (data) {
        count = Math.min(data.length, count || Number.MAX_VALUE);
      }
    }

    count = count || 0;

    for (var i = 0; i < count; i++) {
      var boundRepeatComponent = component;

      if (data) {
        var repeatComponent = (0, _reactLibUpdate2['default'])(component, {
          bindings: { repeat: { $set: null } }
        });
        delete repeatComponent.bindings.repeat;

        boundRepeatComponent = provider.applyBindingContextToComponent(repeatComponent, provider.createBindingContext(data[i], bindingContext));
      }

      components = components || [];
      components.push(boundRepeatComponent);
    }

    return components;
  }
};

bindingHandlers['if'] = {
  priority: 1,
  apply: function apply(component, options, valueAccessor) {
    // TODO: support { left: <left>, operation: <op>, right: <right> }
    // var ops = {
    //   exists: function (l) { return !!l; }
    //   equals: function (l, r) { return l === r; }
    // };
    return !!valueAccessor(options) && component;
  }
};

bindingHandlers.unless = {
  priority: 1,
  apply: function apply(component, options, valueAccessor, bindingContext, provider) {
    return !bindingHandlers['if'].apply(component, options, valueAccessor, bindingContext, provider) && component;
  }
};

exports['default'] = bindingHandlers;
module.exports = exports['default'];