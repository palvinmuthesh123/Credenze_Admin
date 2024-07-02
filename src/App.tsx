import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/redux/store';
import { Provider } from 'react-redux';
import { CssBaseline, Container } from '@mui/material';
import AppRouter from './app/navigation';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppRouter />
    </Provider>
  );
}

export default App;
