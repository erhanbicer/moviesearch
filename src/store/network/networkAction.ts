import { Dispatch } from 'redux';
import { Action, NetworkActionType } from '@store/network/networkTypes';

export const setNetworkAction = (status: boolean) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: NetworkActionType.SET_NETWORK_STATUS, payload: status });
};
