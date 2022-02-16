import React, { FC, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RemoteConfig } from '@services/RemoteConfig';
import commonStyles from '@resources/commonStyles';
import { sleep } from '@utils/sleep';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@router/AppStackNavigator';

interface SplashScreenProps
  extends StackScreenProps<RootStackParamList, 'SplashScreen'> {}

export const SplashScreen: FC<SplashScreenProps> = (props) => {
  const companyName = useMemo(
    () => RemoteConfig.getInstance().getStringValue('COMPANY_NAME'),
    [],
  );
  useEffect(() => {
    sleep(3000).then(() => props.navigation.replace('HomeScreen'));
  }, [props.navigation]);

  return (
    <View style={[styles.container, commonStyles.center]}>
      <Text>{companyName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
