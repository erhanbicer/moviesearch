import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DetailScreenProps {}

export const DetailScreen: FC<DetailScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
