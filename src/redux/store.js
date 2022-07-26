import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import dataSlice from './dataSlice';

export const store = configureStore({
  reducer: dataSlice,
});
