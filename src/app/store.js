import { configureStore } from '@reduxjs/toolkit';
import { scrollbarReducer } from '../features/scrollbar/scrollbar-slice';
export const store = configureStore({
  reducer: {
    scrollbar: scrollbarReducer
  },
});