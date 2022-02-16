import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import commonStyles from '@resources/commonStyles';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useInternetReachable } from '@hooks/useInternetReachable';

interface InitializerProps {}

export const Initializer: FC<InitializerProps> = ({ children }) => {
  const appReady = useTypedSelector((state) => state.appReadiness.appReady);
  const isInternetReachable = useInternetReachable();

  if (appReady) {
    return <>{children}</>;
  }

  return (
    <View style={[styles.container, commonStyles.center]}>
      {isInternetReachable === false ? (
        <Text>İnternet bağlantınızı kontrol ediniz</Text>
      ) : (
        <ActivityIndicator size={'small'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
