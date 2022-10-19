import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: true
}
const productSlice = createSlice({
  name: 'scrollbar',
  initialState,
  reducers: {
    hide: (state) => {
      state.display = false;
    }
  }
})
export const scrollbarState = state => state.scrollbar.display;
export const scrollbarReducer = productSlice.reducer;
export const scrollbarActions = productSlice.actions;