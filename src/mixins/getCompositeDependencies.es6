var getCompositeDependencies = (composite) => {
  var depsHash = {};

  var traverse = ({ type, props, components }) => {
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

export default getCompositeDependencies;
