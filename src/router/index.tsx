import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackNavigator } from '@router/AppStackNavigator';

export const Router: FC = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};
