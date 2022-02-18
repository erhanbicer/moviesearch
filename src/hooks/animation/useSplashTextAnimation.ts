import { useEffect } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import R from '@resources';
import { sleep } from '@utils/sleep';

export const useSplashTextAnimation = () => {
  let h4 = R.fontSize.h4;
  let h6 = R.fontSize.h6;
  const fontSize = useSharedValue(h6);

  const textAnimatedStyle = useAnimatedStyle(() => ({
    fontSize: withSpring(fontSize.value, { stiffness: 10 }),
    opacity: withTiming(
      interpolate(fontSize.value < h4 ? 0 : 1, [0, 1], [0, 1], {}),
      {
        duration: 1000,
      },
    ),
  }));

  useEffect(() => {
    fontSize.value = R.fontSize.h1 * 2;
    sleep(2000).then(() => (fontSize.value = R.fontSize.h6));
  }, [fontSize]);

  return { textAnimatedStyle };
};
