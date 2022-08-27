import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: {
    email: ' ',
    firstName: ' ',
    isActive: false,
    lastName: ' ',
    phone: ' ',
    photo: ' ',
    hasPassword: false
  }
};

export const userDetailsSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    updateUserDetails: (state, { payload }) => {
      state.userDetails = payload;
    },
    clearUserDetails: state => {
      state.userDetails = initialState.userDetails;
    }
  }
});

export const { updateUserDetails, clearUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
