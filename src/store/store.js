import { configureStore } from '@reduxjs/toolkit';
import { reducer as appReducer } from './actions/app';

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      app: appReducer,
    },

    preloadedState,
  });

  return store;
}

const store = createStore();

export default store;
