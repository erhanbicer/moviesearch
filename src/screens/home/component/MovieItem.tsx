import React, { FC, useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import R from '@resources';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { VibrancyView } from '@react-native-community/blur';
import { useOpacityAnimation } from '@hooks/animation';
import { SearchMovie } from '@services/APIService';

interface MovieItemProps {
  item: SearchMovie;
}

const AnimatedBlurView = Animated.createAnimatedComponent(VibrancyView);

export const MovieItem: FC<MovieItemProps> = ({ item }) => {
  const navigation = useNavigation();
  const { opacityValue, opacityStyle } = useOpacityAnimation();

  const handleButton = useCallback(() => {
    //todo: navigation tipi kontrol edilecek
    // @ts-ignore
    navigation.navigate('DetailScreen', { imdbID: item.imdbID });
  }, [item.imdbID, navigation]);

  return (
    <Pressable style={styles.container} onPress={handleButton}>
      <FastImage
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
        onLoadStart={() => (opacityValue.value = 0)}
        source={{ uri: item.poster }}>
        <AnimatedBlurView
          style={[StyleSheet.absoluteFillObject, styles.zIndex, opacityStyle]}
          blurAmount={12}
        />
      </FastImage>
      <Text style={styles.text}>{`${item.title} (${item.year})`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.theme.black,
    flexDirection: 'row',
    borderRadius: R.dimen.m_h,
    paddingLeft: R.dimen.m_w,
    marginTop: R.dimen.xl_h,
  },
  text: {
    flex: 1,
    marginHorizontal: R.dimen.m_w,
    alignSelf: 'center',
    color: R.theme.white,
  },
  image: {
    width: R.dimen.xxl_w * 2.5,
    borderRadius: R.dimen.m_h,
    height: R.dimen.xxl_h * 3,
    justifyContent: 'flex-end',
    bottom: R.dimen.m_h,
    overflow: 'hidden',
  },
  zIndex: {
    zIndex: 1,
  },
});
