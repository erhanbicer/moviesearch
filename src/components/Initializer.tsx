import React, { FC, useCallback, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useInternetReachable } from '@hooks/useInternetReachable';
import { useRemoteConfig } from '@hooks/useRemoteConfig';
import { APIService } from '@services/APIService/APIService';
import { Loading } from '@components/Loading';
import R from '@resources';
import { Analytics } from '@services/Analytics';
import { Text } from '@components';

interface InitializerProps {}

export const Initializer: FC<InitializerProps> = ({ children }) => {
  StatusBar.setBarStyle('light-content');
  const appReady = useTypedSelector((state) => state.appReadiness.appReady);
  const isInternetReachable = useInternetReachable();
  const remoteConfig = useRemoteConfig();

  const servicesInitiliaze = useCallback(async () => {
    APIService.initialize(remoteConfig);
    await Analytics.initialize();
  }, [remoteConfig]);

  useEffect(() => {
    (async () => {
      if (appReady) {
        await servicesInitiliaze();
      }
    })();
  }, [appReady, servicesInitiliaze]);

  if (appReady) {
    return <>{children}</>;
  }

  return (
    <View style={[styles.container, R.commonStyles.center]}>
      {isInternetReachable === false ? (
        <Text>İnternet bağlantınızı kontrol ediniz</Text>
      ) : (
        <Loading />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: R.theme.primary },
});
