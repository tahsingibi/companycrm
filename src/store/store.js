import { configureStore } from '@reduxjs/toolkit';
import { reducer as appReducer } from './actions/app';
import { reducer as yearlyIncomeReducer } from './actions/yearlyIncome';

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      app: appReducer,
      yearlyIncome: yearlyIncomeReducer,
    },

    preloadedState,
  });

  return store;
}

const store = createStore();

export default store;
