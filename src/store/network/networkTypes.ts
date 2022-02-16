export const enum NetworkActionType {
  SET_NETWORK_STATUS = 'SET_NETWORK_STATUS',
}

interface NetworkAction<T extends NetworkActionType, V> {
  type: T;
  payload: V;
}

export type Action = NetworkAction<NetworkActionType.SET_NETWORK_STATUS, boolean>;
