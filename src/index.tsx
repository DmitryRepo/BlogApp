import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles, defaultTheme } from './index.styles';
import { store } from './store/store';

import { App } from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </>
);
