import { useTypedSelector } from '@hooks/useTypedSelector';

export const useInternetChange = (callback: () => void) => {
  const internetConnection = useTypedSelector(
    (state) => state.appReadiness.internetConnection,
  );
  if (!internetConnection) {
    return callback();
  }
};
