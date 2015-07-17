import React from 'react';
import ActionDispatcherMixin from '../../mixins/ActionDispatcherMixin';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

var Anchor = React.createClass({
  mixins: [ ActionDispatcherMixin, PureRenderMixin ],

  getDefaultProps () {
    return {
      source: '',
      target: ''
    };
  },

  render () {
    let href = `${this.props.sourceType}${this.props.source}`;
    return (
      <a href={href} style={this.getStyles()} target={this.props.target}>{this.props.children}</a>
    );
  }

});

export default Anchor;
