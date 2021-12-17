import React from 'react';
import { store } from 'store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles';

export function withExternalDependencies(Component: any) {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>{Component}</ThemeProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
}
