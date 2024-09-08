import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/redux/store';
import { Provider } from 'react-redux';
import { CssBaseline, Container } from '@mui/material';
import AppRouter from './app/navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Ranelte Extended Regular", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
