import React from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import isString from 'lodash/lang/isString';

var Composite = React.createClass({

  mixins: [ PureRenderMixin ],

  childContextTypes: {
    theme: React.PropTypes.object
  },

  getChildContext () {
    return true;
  },

  renderComponentTree ({ address, type, props = {}, components }) {
    var children;

    props.$address = address;
    props.$dispatcher = this.props.dispatcher;

    // TODO: more robust way to detect an import vs regular dom element
    if (isString(type) && type !== 'div') {
      type = this.props.imports && this.props.imports[type];
    }

    if (components && components.length) {
      children = [];
      components.forEach((component) => {
        var child = this.renderComponentTree(component);
        if (child) {
          children.push(child);
        }
      });
    }

    return type && (children ?
      React.createElement(type, props, children) :
      React.createElement(type, props));
  },

  render () {
    return this.renderComponentTree({ type: 'div', props: {}, components: this.props.components });
  }

});

export default Composite;
