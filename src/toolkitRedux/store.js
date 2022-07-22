import { configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './services/studentsApi';

export const store = configureStore({
  reducer: {
    data: toolkitSlice,
  },
});
