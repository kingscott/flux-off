var createActions = (...actions) => {
  return actions.reduce((o, n) => {
    o[n] = n;
    return o;
  }, {});
};

export default createActions;
