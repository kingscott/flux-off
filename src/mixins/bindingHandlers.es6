import forOwn from 'lodash/object/forOwn';
import isUndefined from 'lodash/lang/isUndefined';
import isObject from 'lodash/lang/isObject';
import immuatableUpdate from 'react/lib/update';

var bindingHandlers = {};

bindingHandlers.props = {
  priority: 0,
  apply (component, options, valueAccessor) {
    var update;

    forOwn(options, (value, prop) => {
      var valueUnwrapped = valueAccessor(value);
      if (!isUndefined(valueUnwrapped) && valueUnwrapped !== component.props[prop]) {
        update = update || { props: {} };
        update.props[prop] = { $set: valueUnwrapped };
      }
    });

    return update ?
      immuatableUpdate(component, update) :
      component;
  }
};

bindingHandlers.repeat = {
  priority: 2,
  controlsOwnBindings: true,
  apply (component, options, valueAccessor, bindingContext, provider) {
    var components;
    var count;
    var data;

    if (!isObject(options)) {
      count = options.count;
    }

    if (options.each) {
      data = valueAccessor(options.each, bindingContext);
      if (data) {
        count = Math.min(data.length, count || Number.MAX_VALUE);
      }
    }

    count = count || 0;

    for (var i= 0; i < count; i++) {
      var boundRepeatComponent = component;

      if (data) {
        var repeatComponent = immuatableUpdate(component, {
          bindings: { repeat: { $set: null }}
        });
        delete repeatComponent.bindings.repeat;

        boundRepeatComponent = provider.applyBindingContextToComponent(
          repeatComponent,
          provider.createBindingContext(data[i], bindingContext)
        );
      }

      components = components || [];
      components.push(boundRepeatComponent);
    }

    return components;
  }
};

bindingHandlers.if = {
  priority: 1,
  apply (component, options, valueAccessor) {
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
  apply (component, options, valueAccessor, bindingContext, provider) {
    return !bindingHandlers.if.apply(component, options, valueAccessor, bindingContext, provider) && component;
  }
};

export default bindingHandlers;
