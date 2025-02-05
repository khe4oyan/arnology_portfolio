// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import themeSlice from './slices/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
  }
});

export default store;