import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [76.34127822976814, 10.016287638341907]
      },
      'properties': {
        'title': 'keycode',
        'description': 'Kakkanad'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [76.44127822976814, 10.016287638341907]
      },
      'properties': {
        'title': 'keycode',
        'description': 'Kakkanad'
      }
    }
  ]
};

export const eventSlice = createSlice({
  name: 'mapPage',
  initialState,
  reducers: {
    addNewEvent: (state, { payload }) => {
      state.events.push(payload);
    }
  }
});

export const { addNewEvent } = eventSlice.actions;

export default eventSlice.reducer;