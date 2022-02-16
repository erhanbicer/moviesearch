import { Action, NetworkActionType } from '@store/network/networkTypes';

interface IState {
  isConnected?: boolean;
}

const INITIAL_STATE: IState = {
  isConnected: undefined,
};

const networkReducer = (state = INITIAL_STATE, action: Action): IState => {
  switch (action.type) {
    case NetworkActionType.SET_NETWORK_STATUS:
      return { ...state, isConnected: action.payload };
    default:
      return state;
  }
};

export default networkReducer;
