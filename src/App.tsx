import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';
import { GlobalStyles, theme } from 'assets/styles';

import Routes from 'routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>
            <>
              <GlobalStyles />
              <Routes />
            </>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
