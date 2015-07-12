// imports ...
// import AppStore from './stores/AppStore';
import AppActions from './actions/AppActions';
import CompositeEditor from './CompositeEditor';
import React from 'react';
import createActions from './mixins/createActions';

let actions = createActions('value');

let getComponents = (arr) => {
  return Object.keys(arr);
};

const getAppState = () => {
  return {
    // composite: AppStore.getComposite()
  };
};

// let CompositeLoader = components.CompositeLoader;

const App = React.createClass({

  mixins: [],

  // getInitialState () {
  //   // return getAppState();
  // },

  // onChange2 (event) {
  //   let value = event.target.value;
  //   let ret = config.components[value];
  //   let props = Object.keys(ret.props);
  //   let component = { type: '', props: {} };
  //   component.type = value;
  //   props.forEach((elem, index) => {
  //     component.props[elem] = '';
  //   });
  //   AppActions.loadComponent(component);
  // },

  render () {
    // let comp = getComponents(config.components);
    return (
      <div>
        <select>
          <option value=""></option>

        </select>
        <br /><br />
        <CompositeEditor />
      </div>
    );
  }
});

// { comp.map((str) => {
//   return <option value={str}>{str}</option>;
// }) }

export default App;
