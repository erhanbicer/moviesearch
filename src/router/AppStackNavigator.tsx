import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '@screens/detail/DetailScreen';
import { HomeScreen } from '@screens/home/HomeScreen';
import { SplashScreen } from '@screens/splash/SplashScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
  SplashScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AppStackNavigator = () => {
  return (
    <Navigator initialRouteName={'HomeScreen'}>
      <Screen
        name={'SplashScreen'}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Anasayfa',
        }}
      />
      <Screen
        name={'DetailScreen'}
        component={DetailScreen}
        options={{ title: 'Detay' }}
      />
    </Navigator>
  );
};
