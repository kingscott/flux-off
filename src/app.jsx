// import components, { config } from '...';
import AppStore from './stores/AppStore';
import AppActions from './actions/AppActions';
import CompositeEditor from './CompositeEditor';
import React from 'react';
import PureRenderMixin from 'react/addons';
import createActions from './createActions';

let actions = createActions('value');

let getComponents = (arr) => {
  return Object.keys(arr);
};

const getAppState = () => {
  return {
    composite: AppStore.getComposite()
  };
};

let CompositeLoader = components.CompositeLoader;

const App = React.createClass({
  mixins: [ PureRenderMixin ],

  getInitialState () {
    return getAppState();
  },

  onChange2 (event) {
    let value = event.target.value;
    let ret = config.components[value];
    let props = Object.keys(ret.props);
    let component = { type: '', props: {} };
    component.type = value;
    props.forEach((elem, index) => {
      component.props[elem] = "";
    });
    AppActions.loadComponent(component);
  },

  render () {
    let comp = getComponents(config.components);
    return (
      <div>
        <select onChange={this.onChange2}>
          <option value=""></option>
          { comp.map((str) => {
            return <option value={str}>{str}</option>
          }) }
        </select>
        <br /><br />
        <CompositeEditor composite={this.state.composite} />
        <br />
        <CompositeLoader composite={this.state.composite} imports={components} />
      </div>
    );
  },

  updateState () {
    this.setState(getAppState());
  },

  componentDidMount () {
    AppStore.onChange(this.updateState);
  },

  componentWillMount () {
    AppStore.off(this.updateState);
  }

});

export default App;
