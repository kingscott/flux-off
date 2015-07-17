import isObject from 'lodash/lang/isObject';
import isUndefined from 'lodash/lang/isUndefined';
import has from 'lodash/object/has';
import immuatableUpdate from 'react/lib/update';

import bindingHandlers from './bindingHandlers';

class BindingProvider {

  constructor (scope, lastBindingStamp) {
    this.scope = scope;
    this.currentBindingStamp = null;
    this.lastBindingStamp = lastBindingStamp;
  }

  traverseObject (obj, path, stamp = 0) {
    var value;
    var target = obj;
    var depth;

    for (depth = 0; depth < path.length; depth++) {
      var key = path[depth];

      if (isUndefined(target[key])) {
        break;
      }

      target = target[key];

      if (isObject(target) && has(target, '$stamp')) {
        target = target.$stamp > stamp ? target.data : undefined;
      }

    }

    if (depth === path.length) {
      value = target;
    }

    return value;
  }

  makeValueAccessor (bindingContext) {
    return (value) => {
      var unwrappedValue = value;

      if (isObject(value)) {
        if (has(value, '$current')) {
          unwrappedValue = this.traverseObject(bindingContext.$current, value.$current);
        } else if (has(value, '$parent')) {
          unwrappedValue = this.traverseObject(bindingContext.$parent, value.$parent);
        } else if (has(value, '$root')) {
          unwrappedValue = this.traverseObject(bindingContext.$root, value.$root);
        } else if (has(value, '$currentStamp')) {
          unwrappedValue = this.traverseObject(bindingContext.$current, value.$currentStamp, this.lastBindingStamp);
        } else if (has(value, '$parentStamp')) {
          unwrappedValue = this.traverseObject(bindingContext.$parent, value.$parentStamp, this.lastBindingStamp);
        } else if (has(value, '$rootStamp')) {
          unwrappedValue = this.traverseObject(bindingContext.$root, value.$rootStamp, this.lastBindingStamp);
        }
      }

      return unwrappedValue;
    };
  }

  createBindingContext (current, fromContext) {
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

  applyBindingContextToComponent (component, bindingContext) {
    var boundComponent = component;
    boundComponent.bindingContext = bindingContext;

    if (component.bindings) {
      var bindingNames = Object.keys(component.bindings)
        .filter((name) => !!bindingHandlers[name])
        .sort((a, b) => bindingHandlers[b].priority - bindingHandlers[a].priority);

      var indexOfControlsOwnBindings = bindingNames
        .map((name) => bindingHandlers[name].controlsOwnBindings)
        .indexOf(true);

      var applicableBindings = indexOfControlsOwnBindings >= 0 ?
        bindingNames.slice(0, indexOfControlsOwnBindings + 1) :
        bindingNames;

      applicableBindings.forEach((name) => {
        var handler = bindingHandlers[name];
        var options = component.bindings[name];
        if (boundComponent) {
          boundComponent = handler.apply(boundComponent, options, this.makeValueAccessor(bindingContext), bindingContext, this);
        }
      });
    }

    if (boundComponent && boundComponent.components) {
      var boundChildren = [];
      component.components.forEach((child) => {
        var boundChild = this.applyBindingContextToComponent(child, bindingContext);
        if (boundChild) {
          if (boundChild.forEach) {
            boundChild.forEach((c) => { if (c) { boundChildren.push(c); } });
          } else {
            boundChildren.push(boundChild);
          }
        }
      });

      boundComponent = immuatableUpdate(boundComponent, {
        components: { $set: boundChildren }
      });
    }

    return boundComponent;
  }

  applyBindings (components) {
    var rootComponent = { components: components };
    var bindingContext = this.createBindingContext(this.scope);
    var boundComponents = this.applyBindingContextToComponent(rootComponent, bindingContext).components;

    this.currentBindingStamp = +(new Date());

    return boundComponents;
  }

  getStamp () {
    return this.currentBindingStamp;
  }

}

export default BindingProvider;
