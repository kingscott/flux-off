'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _actionsAppActions = require('../actions/AppActions');

var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// import PureRenderMixin from 'react/addons';

var fromJSON = function fromJSON(str) {
  var data = undefined;
  try {
    data = JSON.parse(str);
  } catch (e) {
    data = false;
  }
  return data;
};

var toJSON = function toJSON(obj) {
  var data = undefined;
  try {
    data = JSON.stringify(obj, replaceKey, 2);
  } catch (e) {}
  return data;
};

var replaceKey = function replaceKey(key, value) {
  var invalidKeys = { bindingContext: true, $dispatcher: true };
  return key in invalidKeys ? undefined : value;
};

var CompositeEditor = _react2['default'].createClass({
  displayName: 'CompositeEditor',

  mixins: [],

  // getInitialState () {
  //   // return { compositeString: '' };
  // },
  //
  onChange: function onChange(event) {},
  //
  // setComposite () {
  //   // let comp = JSON.parse(this.state.compositeString);
  // },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'button',
        { type: 'button' },
        'Update'
      ),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement('textarea', { rows: '20', cols: '60', value: '', onChange: this.onChange })
    );
  }

});

exports['default'] = CompositeEditor;
module.exports = exports['default'];

// let value = event.target.value;
// this.setState({ compositeString: value });
// value={this.state.compositeString}
// componentWillMount () {
//   this.setState({ compositeString: toJSON(this.props.composite) });
// },
//
// componentWillReceiveProps (props) {
//   this.setState({ compositeString: toJSON(props.composite) });
// }