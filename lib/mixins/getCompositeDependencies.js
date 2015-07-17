"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCompositeDependencies = function getCompositeDependencies(composite) {
  var depsHash = {};

  var traverse = function traverse(_ref) {
    var type = _ref.type;
    var props = _ref.props;
    var components = _ref.components;

    if (type) {
      depsHash[type] = null;
    }
    if (components) {
      components.forEach(traverse);
    }
    // support for nested compositions, may need to be reviewed
    if (props && props.components) {
      props.components.forEach(traverse);
    }
  };

  traverse(composite);

  return Object.keys(depsHash);
};

exports["default"] = getCompositeDependencies;
module.exports = exports["default"];