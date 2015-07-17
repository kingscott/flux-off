import React from 'react';
import isString from 'lodash/lang/isString';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

var Composite = React.createClass({

  mixins: [],

  childContextTypes: {
    theme: React.PropTypes.object
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
    return this.renderComponentTree({ type: 'div', props: { style: this.props.style }, components: this.props.components });
  }

});

export default Composite;
