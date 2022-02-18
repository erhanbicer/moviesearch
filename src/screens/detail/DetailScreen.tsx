import React, { FC, useEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@router/AppStackNavigator';
import { Loading } from '@components';
import FastImage from 'react-native-fast-image';
import R from '@resources';
import { BlurView } from '@react-native-community/blur';
import Animated from 'react-native-reanimated';
import { useDetailFetch } from '@hooks';
import { useOpacityAnimation } from '@hooks/animation';
import { Analytics } from '@services';
import { DetailBottomSheet, DetailFooter } from '@screens/detail/component';

interface DetailScreenProps
  extends StackScreenProps<RootStackParamList, 'DetailScreen'> {}

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export const DetailScreen: FC<DetailScreenProps> = ({ route }) => {
  const imdbID = useMemo(() => route.params.imdbID, [route.params.imdbID]);
  const { error, detail } = useDetailFetch(imdbID);
  const { opacityValue, opacityStyle } = useOpacityAnimation();

  useEffect(() => {
    (async () => {
      if (detail !== undefined && error === undefined) {
        await Analytics.getInstance().setCurrentScreen('DetailScreen');
        await Analytics.getInstance().logEvent('movie_detail', {
          imdbID: detail.imdbID,
          title: detail.title,
          year: detail.year,
        });
      }
    })();
  }, [detail, error]);

  if (error) {
    return (
      <View style={[styles.flex, R.commonStyles.center]}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (detail === undefined) {
    return <Loading />;
  }

  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={styles.flex}
      bounces={false}>
      <FastImage
        style={styles.image}
        resizeMode={FastImage.resizeMode.stretch}
        source={{ uri: detail.poster }}
        onLoadStart={() => (opacityValue.value = 0)}
      />
      <AnimatedBlurView
        blurAmount={32}
        style={[StyleSheet.absoluteFillObject, styles.image, opacityStyle]}
        blurType={'light'}
      />
      <DetailBottomSheet detail={detail} />
      <DetailFooter imdbRating={detail.imdbRating} imdbID={imdbID} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  image: {
    width: R.dimen.width,
    height: Math.floor(R.dimen.height / 1.4),
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
