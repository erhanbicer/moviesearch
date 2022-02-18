import React, { FC, useCallback, useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import R from '@resources';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Spacer, Text } from '@components';
import { valueCheck } from '@helpers';
import { DetailMovie } from '@services/APIService/DTOs';
import type { TextProps } from '@components/Text/types';

interface DetailBottomSheetProps {
  detail: DetailMovie;
}

export const DetailBottomSheet: FC<DetailBottomSheetProps> = ({ detail }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['38%', '65%'], []);

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
        <Text
          style={styles.title}
          heading={'h1'}
          bold
          children={valueCheck(detail.title)}
        />
        <InfoText text={valueCheck(detail.genre)} />
        <Spacer />
        <InfoText text={valueCheck(`Runtime: ${detail.runtime}`)} />
        <Spacer />
        <InfoText text={valueCheck(`Released Date: ${detail.released}`)} />
        <Spacer space={R.dimen.l_h} />
        <Text
          style={styles.plot}
          heading={'h4'}
          children={valueCheck(detail.plot)}
        />
        <Spacer space={R.dimen.l_h} />
        <InfoText text={valueCheck(`Awards: ${detail.awards}`)} />
        <Spacer />
        <InfoText text={valueCheck(`Language: ${detail.language}`)} />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const InfoText: FC<TextProps & { text: string }> = ({ text }) => {
  return (
    <Text
      heading={'h4'}
      textColor={R.theme.grays}
      style={styles.infoText}
      children={valueCheck(text)}
    />
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
    letterSpacing: -0.4,
  },
  infoText: {
    fontFamily: R.fonts.medium,
    letterSpacing: -0.4,
  },
  plot: {
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
