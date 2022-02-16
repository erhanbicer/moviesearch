import {
  Action,
  AppReadinessActionType,
} from '@store/appReadiness/appReadinessTypes';

interface IState {
  appReady: boolean;
  internetConnection: boolean | null;
  remoteConfigFetched: boolean;
}

const INITIAL_STATE: IState = {
  appReady: false,
  internetConnection: null,
  remoteConfigFetched: false,
};

export const appReadinessReducer = (
  state = INITIAL_STATE,
  action: Action,
): IState => {
  switch (action.type) {
    case AppReadinessActionType.SET_NETWORK_STATUS_TRUE: {
      const newState: IState = { ...state, internetConnection: true };
      return { ...newState, appReady: getAppReady(newState) };
    }
    case AppReadinessActionType.SET_NETWORK_STATUS_FALSE: {
      return { ...state, internetConnection: false };
    }

    case AppReadinessActionType.SET_REMOTE_CONFIG_FETCHED: {
      if (action.payload) {
        const newState: IState = { ...state, remoteConfigFetched: true };
        return { ...newState, appReady: getAppReady(newState) };
      }

      return { ...state, remoteConfigFetched: false };
    }
    default:
      return state;
  }
};

const getAppReady = (state: IState | { appReady?: boolean }) => {
  delete state.appReady;
  return Object.values(state).every((val) => val === true);
};
