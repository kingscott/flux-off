import React from 'react';
import ActionDispatcherMixin from '../../../lib/Mixins/ActionDispatcherMixin';
import PureRenderMixin from 'react/addons';

const Anchor = React.createClass({

  mixins: [ ActionDispatcherMixin ],

  getDefaultProps () {
    return {
      source: '',
      target: ''
    };
  },

  render () {
    return (
      <a href={this.props.source} target={this.props.target}></a>
    );
  }

});

export default Anchor;
