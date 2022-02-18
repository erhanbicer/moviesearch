import { Dispatch } from 'redux';
import {
  AppReadinessActionType,
  Action,
} from '@store/appReadiness/appReadinessTypes';

export const setNetworkReachable = (dispatch: Dispatch<Action>) => {
  dispatch({
    type: AppReadinessActionType.SET_NETWORK_STATUS_TRUE,
  });
};
export const setNetworkNotReachable = (dispatch: Dispatch<Action>) => {
  dispatch({
    type: AppReadinessActionType.SET_NETWORK_STATUS_FALSE,
  });
};

export const setRemoteConfigFetched =
  (status: boolean) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: AppReadinessActionType.SET_REMOTE_CONFIG_FETCHED,
      payload: status,
    });
  };
