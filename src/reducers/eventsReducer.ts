/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3928, 10.026]
      },
      properties: {
        id: '1',
        title: 'Wonderla Amusement Park Kochi',
        description:
          'Large amusement park featuring land & water rides, including options for small kids, plus 3D films.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3086, 10.0265]
      },
      properties: {
        id: '2',
        title: 'Jurassic World Event',
        description:
          'The World of happiness now becomes the world of adventures as we have planned an incredible array of fun activities exclusively curated from Universal Studios.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3086, 10.0265]
      },
      properties: {
        id: '3',
        title: 'Lulu Chocolate Festival',
        description: 'Sale'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3086, 10.0265]
      },
      properties: {
        id: '4',
        title: 'Readers Fest 2022',
        description: 'Book Fair'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3086, 10.0265]
      },
      properties: {
        id: '5',
        title: 'Lulu Book Fair',
        description: 'Book Fair'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3572, 9.5048]
      },
      properties: {
        id: '6',
        title: 'Nehru Trophy Boat Race',
        description: 'Boat Race'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3572, 9.5048]
      },
      properties: {
        id: '7',
        title: '12 Day Motorcycle Camping Tour in Kerala',
        description: 'Motorcycle Camping Tour'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.1783, 10.1416]
      },
      properties: {
        id: '8',
        title: 'Summer Pool Party',
        description:
          'Enjoy Your Weekend with Pool Party, Belly Dance, Ramp Show, Buffet Dinner & Drink'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3928, 10.026]
      },
      properties: {
        id: '9',
        title: 'Sunburn Arena Ft. NUCLEYA',
        description:
          'Get Ready for a massive Bass Music Explosion. Sunburn Arena with India’s biggest electronic music phenomenon, the hitmaker of "Bass Rani", "Raja Baja", and "Tota Myna" Nucleya is coming to your city for Live performance.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.2749, 9.981]
      },
      properties: {
        id: '10',
        title: 'Cloud Burst Music Festival',
        description: 'Music Festival'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.2831, 9.9779]
      },
      properties: {
        id: '11',
        title: 'Masala Coffee concert - Centre Square Mall',
        description: 'Musical concert'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3624, 10.0154]
      },
      properties: {
        id: '12',
        title: 'Novotel - Margarita Ladies Night Out',
        description: 'Party'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [75.6059, 11.5601]
      },
      properties: {
        id: '13',
        title: 'Indiegaga Kozhikode 2022',
        description:
          'The fourth edition of Indiegaga International Arts and Music Festival is coming to Kozhikode this Onam season to pep up the holiday cheer with South India’s favourite indie artistes.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.316190759, 9.990441033]
      },
      properties: {
        id: '14',
        title: 'Holiday Inn Commercial Saturday',
        description: 'Party'
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
