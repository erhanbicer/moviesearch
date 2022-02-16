import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@store';
import { Initializer } from '@components/Initializer';
import { Router } from '@router/index';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <ReduxProvider store={store}>
      <Initializer>
        <Router />
      </Initializer>
    </ReduxProvider>
  );
};

export default App;
