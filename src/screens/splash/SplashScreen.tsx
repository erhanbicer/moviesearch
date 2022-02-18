import React, { FC, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { sleep } from '@utils';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@router/AppStackNavigator';
import { useSplashTextAnimation } from '@hooks/animation';
import R from '@resources';
import { Text } from '@components';
import { RemoteConfig } from '@services';

interface SplashScreenProps
  extends StackScreenProps<RootStackParamList, 'SplashScreen'> {}

export const SplashScreen: FC<SplashScreenProps> = (props) => {
  const { textAnimatedStyle } = useSplashTextAnimation();

  const companyName = useMemo(
    () => RemoteConfig.getInstance().getStringValue('COMPANY_NAME'),
    [],
  );

  useEffect(() => {
    sleep(3000).then(() => props.navigation.replace('HomeScreen'));
  }, [props.navigation]);

  return (
    <View style={[styles.container, R.commonStyles.center]}>
      <Text animated={textAnimatedStyle}>{companyName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
