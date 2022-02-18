import React, { FC } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import { AppStackNavigator } from '@router/AppStackNavigator';
import R from '@resources';

const theme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: R.theme.accent,
    card: R.theme.primary,
    border: 'transparent',
    text: R.theme.white,
    background: R.theme.primary,
    notification: R.theme.white,
  },
};

export const Router: FC = () => {
  return (
    <NavigationContainer theme={theme}>
      <AppStackNavigator />
    </NavigationContainer>
  );
};
