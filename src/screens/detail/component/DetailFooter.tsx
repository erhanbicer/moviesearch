import React, { FC, useCallback } from 'react';
import { Alert, Linking, Pressable, StyleSheet, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import R from '@resources';
import { lerp } from '@helpers';
import { Text } from '@components';

interface DetailFooterProps {
  imdbID: string;
  imdbRating: string;
}

const IMDB_URL = 'https://www.imdb.com/title/';

export const DetailFooter: FC<DetailFooterProps> = ({ imdbID, imdbRating }) => {
  const rating = lerp(0, 10, parseFloat(imdbRating));

  const handleClick = useCallback(async () => {
    let url = IMDB_URL + imdbID;
    Linking.canOpenURL(url).then((res) => {
      if (res) {
        Linking.openURL(url);
      } else {
        Alert.alert('Hata', 'IMDb açılamıyor.\nDaha sonra tekrar deneyin', [
          { text: 'Tamam' },
        ]);
      }
    });
  }, [imdbID]);

  return (
    <View style={styles.subContainer}>
      <Pressable style={styles.button} onPress={handleClick}>
        <Text
          style={styles.buttonText}
          heading={'h5'}
          textColor={R.theme.black}>
          View IMDb
        </Text>
      </Pressable>
      <CircularProgress
        value={rating}
        radius={40}
        duration={1000}
        activeStrokeColor={R.theme.white}
        textColor={R.theme.white}
        textStyle={styles.circularText}
        title={'IMDb'}
        titleColor={R.theme.white}
        titleStyle={styles.circularTitle}
        circleBackgroundColor={R.theme.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: R.dimen.xxl_h * 3.9,
  },
  subContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: R.theme.primary,
    height: R.dimen.xxl_h * 3,
    width: R.dimen.width,
    paddingHorizontal: R.dimen.xxl_w,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: R.theme.white,
    paddingVertical: R.dimen.l_h,
    paddingHorizontal: R.dimen.xxl_w,
    borderRadius: R.dimen.xl_w,
  },
  buttonText: {
    fontFamily: R.fonts.medium,
  },
  circularTitle: {
    fontFamily: R.fonts.bold,
  },
  circularText: {
    padding: 0,
  },
});
