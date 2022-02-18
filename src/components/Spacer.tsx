import React, { FC } from 'react';
import { View } from 'react-native';
import R from '@resources';

interface SpacerProps {
  space?: number;
}

export const Spacer: FC<SpacerProps> = ({ space = R.dimen.xs_h }) => {
  return <View style={{ height: space, width: space }} />;
};
