import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import categorySlice from './categorySlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    videosCategory: categorySlice,
    search: searchSlice,
  },
});

export default store;
