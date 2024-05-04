import { configureStore } from '@reduxjs/toolkit';

import { autosReducer } from './autoSlice/autoSlice';

export const store = configureStore({
  reducer: {
    autos: autosReducer,
  },
});
