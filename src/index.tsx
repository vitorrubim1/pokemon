import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Routes from './routes';
import theme from './styles/theme';
import AppProvider from './hooks';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
