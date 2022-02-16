import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {}

export const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
});
