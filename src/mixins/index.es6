import React from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import ActionDispatcher from './ActionDispatcher';
import ActionDispatcherMixin from './ActionDispatcherMixin';
import createActions from './createActions';

import BindingProvider from './BindingProvider';
import bindingHandlers from './bindingHandlers';

import Store from './Store';

import DataSourceMixin from './DataSourceMixin';

import getCompositeDependencies from './getCompositeDependencies';

export default {
  React: React,
  PureRenderMixin: PureRenderMixin,
  ActionDispatcher: ActionDispatcher,
  ActionDispatcherMixin: ActionDispatcherMixin,
  createActions: createActions,
  BindingProvider: BindingProvider,
  bindingHandlers: bindingHandlers,
  Store: Store,
  DataSourceMixin: DataSourceMixin,
  getCompositeDependencies: getCompositeDependencies
};
