import { configureStore } from '@reduxjs/toolkit';
import expoSlice from './expoSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      expo: expoSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
