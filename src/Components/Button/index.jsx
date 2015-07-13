import React from 'react';
import ActionDispatcherMixin from '../../mixins/ActionDispatcherMixin';
import createActions from '../../mixins/createActions';

var actions = createActions('clicked');

var Button = React.createClass({

  mixins: [ ActionDispatcherMixin ],

  getDefaultProps () {
    return {
      type: 'button',
      primary: false,
      fontSize: '',
      color: ''
    };
  },

  onClick (event) {
    this.dispatch(actions.clicked);
  },

  render () {
    let styles = `color:${this.props.color};font-size:${this.props.fontSize}`;
    return (
      <button style={styles} type={this.props.type} onClick={this.onClick}>{this.props.label}</button>
    );
  }

});

export default Button;
