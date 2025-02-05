import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    }
  }
});

export default themeSlice.reducer;
export const {
  toggleTheme
} = themeSlice.actions;