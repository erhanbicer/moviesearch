import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNetInfo } from '@react-native-community/netinfo';
import {
  setNetworkNotReachable,
  setNetworkReachable,
} from '@store/appReadiness/appReadinessActions';
import { sleep } from '@utils';

export const useInternetReachable = () => {
  const dispatch = useDispatch();
  const { isInternetReachable } = useNetInfo();

  useEffect(() => {
    if (isInternetReachable) {
      sleep(500).then(() => dispatch(setNetworkReachable)); // sadece indicator görünür kılmak için
    } else if (isInternetReachable === false) {
      dispatch(setNetworkNotReachable);
    }
  }, [dispatch, isInternetReachable]);

  return isInternetReachable;
};
