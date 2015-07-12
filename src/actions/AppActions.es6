import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {

  setComposite (composite) {
    AppDispatcher.dispatch({
      type: ActionTypes.SET_COMPOSITE,
      composite
    });
  },

  loadComponent (component) {
    AppDispatcher.dispatch({
      type: ActionTypes.LOAD_COMPONENT,
      component
    });
  }
};
