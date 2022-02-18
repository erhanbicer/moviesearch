import { ReactNode } from 'react';
import { TextProps as RNTextProps, TextStyle, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

type MergedStyle = RNTextProps;
export interface TextProps extends MergedStyle {
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: string | ReactNode[];
  bold?: boolean;
  animated?: Animated.AnimateStyle<ViewStyle | TextStyle>;
  textColor?: string;
}
