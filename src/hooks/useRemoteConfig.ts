import { useEffect } from 'react';
import { RemoteConfig } from '@services/RemoteConfig';
import { useDispatch } from 'react-redux';
import { setRemoteConfigFetched } from '@store/appReadiness/appReadinessActions';
import { useTypedSelector } from '@hooks/useTypedSelector';

export const useRemoteConfig = () => {
  const dispatch = useDispatch();
  const remoteConfigInitialized = useTypedSelector(
    (state) => state.appReadiness.remoteConfigFetched,
  );

  useEffect(() => {
    if (!remoteConfigInitialized) {
      RemoteConfig.initialize()
        .then(() => {
          dispatch(setRemoteConfigFetched(true));
        })
        .catch(() => {
          dispatch(setRemoteConfigFetched(false));
        });
    }
  }, [dispatch, remoteConfigInitialized]);

  return RemoteConfig.getInstance();
};
