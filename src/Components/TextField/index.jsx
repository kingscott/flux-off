import React from 'react';
import createActions from '../../mixins/createActions';
import ActionDispatcherMixin from '../../mixins/ActionDispatcherMixin';

let actions = createActions('value');

const TextField = React.createClass({

  mixins: [ ActionDispatcherMixin ],

  onChange (event) {
    let value = event.target.value;
    this.dispatch(actions.value, event.target.value);
  },

  render () {
    let styles = `color:${this.props.color};font-size:${this.props.fontSize}`;
    return (
      <input type="text" placeholder={this.props.placeholder} style={styles} onChange={this.onChange} />
    );
  }

});

export default TextField;
