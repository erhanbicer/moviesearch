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
