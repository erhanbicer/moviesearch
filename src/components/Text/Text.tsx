import React from 'react';
import { Text as RNText } from 'react-native';
import Animated from 'react-native-reanimated';
import { TextProps } from './types';
import R from '@resources';

export const Text = React.memo((props: TextProps) => {
  const {
    children,
    heading = 'h4',
    bold = false,
    animated,
    textColor,
    style,
    ...rest
  } = props;

  const color: string = textColor !== undefined ? textColor : R.theme.white;

  const localStyle: TextProps['style'] = [
    {
      fontFamily: R.fonts.normal,
      fontSize: R.fontSize[heading],
      color,
    },
    style,
    bold && { fontFamily: R.fonts.bold },
  ];

  if (animated) {
    return (
      <Animated.Text style={[localStyle, { ...animated }]} {...rest}>
        {children}
      </Animated.Text>
    );
  }

  return (
    <RNText style={localStyle} {...rest}>
      {children}
    </RNText>
  );
});
