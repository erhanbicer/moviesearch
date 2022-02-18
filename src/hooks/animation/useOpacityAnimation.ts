import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useOpacityAnimation = (opacitiy = 1, duration = 1400) => {
  const opacityValue = useSharedValue(opacitiy);

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: withTiming(interpolate(opacityValue.value, [0, 1], [0, 1]), {
      duration,
      easing: Easing.linear,
    }),
  }));

  return { opacityValue, opacityStyle };
};
