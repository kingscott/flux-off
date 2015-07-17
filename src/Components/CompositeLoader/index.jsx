import ActionDispatcher from '../../mixins/ActionDispatcher';
import React from 'react';
import Store from '../../mixins/Store';
import BindingProvider from '../../mixins/BindingProvider';
import createActions from '../../mixins/createActions';
import getCompositeDependencies from '../../mixins/getCompositeDependencies';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import Composite from '../Composite';

let myStore = new Store();
let myDispatcher = new ActionDispatcher();

const CompositeLoader = React.createClass({

  mixins: [],

  getInitialState () {
    return {
      bindingProvider: new BindingProvider(myStore.get())
    };
  },

  render () {
    let imports = this.props.imports;
    let boundComponents = this.state.bindingProvider.applyBindings(this.props.composite.components);
    return (
      <Composite style={this.getStyles()} components={boundComponents} imports={imports} dispatcher={myDispatcher} />
    );
  },

  componentDidMount () {
    this.unregisterDispatcher = myDispatcher.register(this.onDispatch);
    myStore.on('change', this.onChange);
  },

  componentWillUnmount () {
    this.unregisterDispatcher();
    myStore.off('change', this.onChange);
  },

  onDispatch (namespace, actionType, payload) {
    myStore.set(namespace, actionType, payload);
  },

  onChange () {
    this.setState({
      bindingProvider: new BindingProvider(myStore.get(), this.state.bindingProvider.getStamp())
    });
  }

});

export default CompositeLoader;
