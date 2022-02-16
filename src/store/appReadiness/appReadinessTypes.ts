export const enum AppReadinessActionType {
  SET_NETWORK_STATUS_TRUE = 'SET_NETWORK_STATUS_TRUE',
  SET_NETWORK_STATUS_FALSE = 'SET_NETWORK_STATUS_FALSE',
  SET_REMOTE_CONFIG_FETCHED = 'SET_REMOTE_CONFIG_FETCHED',
}

interface AppReadiness<T extends AppReadinessActionType, V = undefined> {
  type: T;
  payload?: V extends undefined ? void : V;
}

export type Action =
  | AppReadiness<AppReadinessActionType.SET_NETWORK_STATUS_TRUE>
  | AppReadiness<AppReadinessActionType.SET_NETWORK_STATUS_FALSE>
  | AppReadiness<AppReadinessActionType.SET_REMOTE_CONFIG_FETCHED, boolean>;
