import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@store';
import { Initializer } from '@components/Initializer';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <ReduxProvider store={store}>
      <Initializer>
        <View style={styles.container}>
          <Text>App</Text>
        </View>
      </Initializer>
    </ReduxProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
