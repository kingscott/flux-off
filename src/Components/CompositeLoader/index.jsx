import React from 'react';
import Store from '../../mixins/Store';
import BindingProvider from '../../mixins/BindingProvider';
import ActionDispatcher from '../../mixins/ActionDispatcher';
import createActions from '../../mixins/createActions';
import getCompositeDependencies from '../../mixins/getCompositeDependencies';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import Composite from '../Composite';

let myStore = new Store();
let myDispatcher = new ActionDispatcher();

const CompositeLoader = React.createClass({

  mixins: [ PureRenderMixin ],

  getInitialState () {
    return {
      bindingProvider: new BindingProvider(myStore.get())
    };
  },

  render () {
    let imports = this.props.imports;
    let boundComponents = this.state.bindingProvider.applyBindings(this.props.composite.components);
    return (
      <Composite components={boundComponents} imports={imports} dispatcher={myDispatcher} />
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
