import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userSlice from '../redux/slices/userSlice';
import App from './App';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  preloadedState: {
    user: window.initState.user || null,
  },
});

// определение контейнера где будет монтироваться React приложение
const container = document.getElementById('root');

ReactDOMClient.hydrateRoot(
  container,
  <BrowserRouter>
    <Provider store={store}>
      <App {...window.initState} />
    </Provider>
  </BrowserRouter>,
);
delete window.initState;
