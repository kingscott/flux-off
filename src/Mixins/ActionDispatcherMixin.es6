var ActionDispatcherMixin = {

  dispatch (actionType, payload=true) {
    this.props.$dispatcher.dispatch(this.props.$address, actionType, { $stamp: +(new Date()), data: payload });
  }

};

export default ActionDispatcherMixin;
