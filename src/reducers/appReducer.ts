import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: []
};

export const appReducerSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showNotifier: (state, { payload }) => {
      state.notifications = [
        ...state.notifications,
        { message: payload.message, type: payload.type, id: Math.random() }
      ];
    },
    hideNotifier: (state, { payload }) => {
      const NotificationsArray = state.notifications.filter(
        item => item.id !== payload
      );
      state.notifications = [...NotificationsArray];
    }
  }
});

export const { showNotifier, hideNotifier } = appReducerSlice.actions;

export default appReducerSlice.reducer;
