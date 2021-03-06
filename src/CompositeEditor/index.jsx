// import ....
import AppActions from '../actions/AppActions';
import React from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

let fromJSON = (str) => {
  let data;
  try {
    data = JSON.parse(str);
  } catch (e) {
    data = false;
  }
  return data;
};

let toJSON = (obj) => {
  let data;
  try {
    data = JSON.stringify(obj, replaceKey, 2);
  } catch (e) {
    console.log(e.toString());
  }
  return data;
};

let replaceKey = (key, value) => {
  let invalidKeys = { bindingContext: true, $dispatcher: true };
  return key in invalidKeys ? undefined : value;
};

const CompositeEditor = React.createClass({

  mixins: [ PureRenderMixin ],

  getInitialState () {
    return { compositeString: '' };
  },

  onChange (event) {
    let value = event.target.value;
    this.setState({ compositeString: value });
  },

  setComposite () {
    let comp = JSON.parse(this.state.compositeString);
    AppActions.setComposite(comp);
  },

  render () {
    return (
      <div>
        <button type="button" onClick={this.setComposite}>Update</button><br /><br />
        <textarea rows="20" cols="83" value={this.state.compositeString}
        onChange={this.onChange}></textarea>
      </div>
    );
  },

  componentWillMount () {
    this.setState({
      compositeString: toJSON(this.props.composite)
    });
  },

  componentWillReceiveProps (props) {
    this.setState({
      compositeString: toJSON(props.composite)
    });
  }
});

export default CompositeEditor;
