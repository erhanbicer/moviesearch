import { useTypedSelector } from '@hooks';

export const useInternetChange = (callback: () => void) => {
  const internetConnection = useTypedSelector(
    (state) => state.appReadiness.internetConnection,
  );
  if (!internetConnection) {
    return callback();
  }
};
