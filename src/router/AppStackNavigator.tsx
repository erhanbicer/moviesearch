import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { DetailScreen, HomeScreen, SplashScreen } from '@screens';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {
    imdbID: string;
  };
  SplashScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AppStackNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'SplashScreen'}>
      <Screen name={'SplashScreen'} component={SplashScreen} />
      <Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Anasayfa',
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Screen
        name={'DetailScreen'}
        component={DetailScreen}
        options={{ title: 'Detay', ...TransitionPresets.ModalTransition }}
      />
    </Navigator>
  );
};
