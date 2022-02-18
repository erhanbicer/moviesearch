import React, { FC, useCallback, useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import R from '@resources';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Text, Spacer } from '@components';
import { DetailMovie } from '@services/APIService';

interface DetailBottomSheetProps {
  detail: DetailMovie;
}

export const DetailBottomSheet: FC<DetailBottomSheetProps> = ({ detail }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['38%', '65%'], []);

  const valueCheck = (value: string): string => {
    return value.match(/N\/A/g) ? '' : value;
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      backgroundStyle={{
        backgroundColor: R.theme.primary,
        borderRadius: R.dimen.xxl_w,
      }}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <BottomSheetScrollView
        style={styles.contentContainer}
        bounces={false}
        stickyHeaderIndices={[0]}>
        <Text style={styles.title} children={valueCheck(detail.title)} />
        <Text style={styles.genre} children={valueCheck(detail.genre)} />
        <Spacer />
        <Text
          style={styles.genre}
          children={valueCheck(`Runtime: ${detail.runtime}`)}
        />
        <Spacer />
        <Text
          style={styles.genre}
          children={valueCheck(`Released Date: ${detail.released}`)}
        />
        <Spacer space={R.dimen.l_h} />
        <Text style={styles.plot} children={valueCheck(detail.plot)} />
        <Spacer space={R.dimen.l_h} />
        <Text
          style={styles.genre}
          children={valueCheck(`Awards: ${detail.awards}`)}
        />
        <Spacer />
        <Text
          style={styles.genre}
          children={valueCheck(`Language: ${detail.language}`)}
        />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: R.dimen.xxl_w,
  },
  title: {
    color: R.theme.white,
    fontSize: R.fontSize.h1 * 1.2,
    fontFamily: R.fonts.bold,
    letterSpacing: -0.4,
  },
  genre: {
    fontSize: R.fontSize.h4,
    fontFamily: R.fonts.medium,
    color: R.theme.grays,
    letterSpacing: -0.4,
  },
  plot: {
    fontSize: R.fontSize.h4,
    fontFamily: R.fonts.medium,
    color: R.theme.white,
    textAlign: 'justify',
  },
  blur: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: R.dimen.xxl_h * 3.9,
  },
  blurContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: R.theme.white,
    height: R.dimen.xxl_h * 3,
    width: R.dimen.width,
    paddingHorizontal: R.dimen.xxl_w,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: R.theme.black,
    paddingVertical: R.dimen.l_h,
    paddingHorizontal: R.dimen.xxl_w,
    borderRadius: R.dimen.xl_w,
  },
  buttonText: {
    fontFamily: R.fonts.medium,
    color: R.theme.white,
  },
});
