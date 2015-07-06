import React from 'react';
import createActions from '../../../lib/Mixins/createActions';
import ActionDispatcherMixin from '../../../lib/Mixins/ActionDispatcherMixin';
import PureRenderMixin from 'react/addons';

let actions = createActions('clicked');

const Button = React.createClass({

  mixins: [ ActionDispatcherMixin ],

  getDefaultProps() {
    return {
      type: 'button',
      primary: false,
      label: ''
    };
  },

  onClick (event) {
    this.dispatch(actions.clicked);
  },

  render () {
    return (
      <button type={this.props.type} onClick={this.onClick}>{this.props.label}</button>
    );
  }

});

export default Button;
