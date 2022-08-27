import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNavOpen: true
};

export const leftNavigationSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    updateValue: (state, { payload }) => {
      state.isNavOpen = payload;
    }
  }
});

export const { updateValue } = leftNavigationSlice.actions;

export default leftNavigationSlice.reducer;
