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
        title: 'Bangalore Arts And Crafts Mela',
        description:
          'Grand Flea Market',
        image: '/images/arts_and_crafts_mela.jpg',
        start_time: '2022-08-28T21:30:00.000Z',
        category: 1
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [77.626579, 12.934533]
      },
      properties: {
        id: '2',
        title: 'Koramangala Karaoke Night',
        description:
          'Late Night Karaoke Party in Koramangala where you can buy a redeemable ticket and sing your heart out.',
        image: '/images/karaoke.jpg',
        start_time: '2022-08-30T15:30:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3087, 10.0265]
      },
      properties: {
        id: '3',
        title: 'Lulu Chocolate Festival',
        description: 'Sale',
        image: '/images/chocolate_festival.jpg',
        start_time: '2022-08-28T03:30:00.000Z',
        category: 1
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
        description: 'Book Fair',
        image: '/images/book_fair.jpg',
        start_time: '2022-08-28T03:30:00.000Z',
        category: 1
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [77.61575, 12.93358]
      },
      properties: {
        id: '5',
        title: 'Savage Sunday',
        description: 'DJ Night With Dance Floor',
        image: '/images/dj_night.jpg',
        start_time: '2022-09-01T15:00:00.000Z',
        category: 4
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
        description: 'Boat Race',
        image: '/images/boat_race.jpg',
        start_time: '2022-09-10T04:00:00.000Z',
        category: 6
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3582, 9.5048]
      },
      properties: {
        id: '7',
        title: '12 Day Motorcycle Camping Tour in Kerala',
        description: 'Motorcycle Camping Tour',
        image: '/images/motorcycle_camping_tour.jpeg',
        start_time: '2022-09-10T04:00:00.000Z',
        category: 3
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.1793, 10.1416]
      },
      properties: {
        id: '8',
        title: 'Summer Pool Party',
        description:
          'Enjoy Your Weekend with Pool Party, Belly Dance, Ramp Show, Buffet Dinner & Drink',
        image: '/images/boat_race.jpg',
        start_time: '2022-09-10T04:00:00.000Z',
        category: 4
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3938, 10.026]
      },
      properties: {
        id: '9',
        title: 'Sunburn Arena Ft. NUCLEYA',
        description:
          'Get Ready for a massive Bass Music Explosion. Sunburn Arena with Indias biggest electronic music phenomenon, the hitmaker of "Bass Rani", "Raja Baja", and "Tota Myna" Nucleya is coming to your city for Live performance.',
        image: '/images/classical_music.jpg',
        start_time: '2022-10-13T12:09:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.2759, 9.981]
      },
      properties: {
        id: '10',
        title: 'Cloud Burst Music Festival',
        description: 'Music Festival',
        image: '/images/musical_event.jpg',
        start_time: '2022-09-20T12:00:00.000Z',
        category: 4
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
        description: 'Musical concert',
        image: '/images/masala_coffee_concert.jpg',
        start_time: '2022-09-06T12:00:00.000Z',
        category: 4
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
        description: 'Party',
        image: '/images/dj_night.jpg',
        start_time: '2022-09-07T12:00:00.000Z',
        category: 4
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
        description: 'The fourth edition of Indiegaga International Arts and Music Festival is coming to Kozhikode this Onam season to pep up the holiday cheer with South Indias favourite indie artistes.',
        image: '/images/indiegaga.jpeg',
        start_time: '2022-09-02T12:00:00.000Z',
        category: 4
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
        description: 'Dj Party',
        image: '/images/dj_night.jpg',
        start_time: '2022-09-02T12:00:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.5935277778, 8.89355555556]
      },
      properties: {
        id: '15',
        title: 'HARISANKAR | Live Concert | DD Kollam Carnival 2022',
        description: 'Musical Concert',
        image: '/images/harishankar_concert.jpeg',
        start_time: '2022-09-11T12:00:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.30896, 10.0265]
      },
      properties: {
        id: '16',
        title: 'Oxemberg Fashion Week 2022',
        description: 'The 5th edition of Lulu Fashion Week 2022 by Oxemberg in association with Peter England',
        image: '/images/fashion.jpeg',
        start_time: '2022-09-04T10:30:00.000Z',
        category: 7
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3453698, 10.01687]
      },
      properties: {
        id: '17',
        title: 'Life Of Pai - Stand Up Comedy Special by Vishnu Pai',
        description: 'Live standup comedy at the wonderful Collective Coworks at Kakkanad, Kochi',
        image: '/images/standup_comedy.jpg',
        start_time: '2022-09-12T10:30:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3294, 9.9482]
      },
      properties: {
        id: '18',
        title: 'Utopian Dystopia - art festival',
        description: 'Utopian Dystopia is a 10-day festival focused on bridging art, design and technology.',
        image: '/images/utopia_dystopia.jpg',
        start_time: '2022-09-14T10:30:00.000Z',
        category: 8
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.2465, 9.9686]
      },
      properties: {
        id: '19',
        title: 'Kochi-Muziris Biennale',
        description: 'International exhibition of contemporary art.',
        image: '/images/kochi_muziris_biennale.jpg',
        start_time: '2022-12-12T04:30:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.2831, 9.9779]
      },
      properties: {
        id: '20',
        title: 'Kid\'s Carnival',
        description: 'A kid\'s carnival accompanied by Art& Craft workshops, cartoon mascots, magic shows, book exchanges and much more.',
        image: '/images/kids_carnival.jpg',
        start_time: '2022-10-12T04:30:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.2429, 9.9640]
      },
      properties: {
        id: '21',
        title: 'Classical Music Live Session',
        description: 'Get mesmerized by the symphony and melody of the many instruments playing in sync with each other, and immerse yourself in the rhythm of the music.',
        image: '/images/classical_music.jpg',
        start_time: '2022-10-04T04:30:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.9571, 8.5114]
      },
      properties: {
        id: '22',
        title: 'Milan \'22',
        description: 'Neon themed Music Festival.',
        image: '/images/musical_event.jpg',
        start_time: '2022-09-12T12:30:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [80.2692246437, 13.0010034739]
      },
      properties: {
        id: '23',
        title: 'Ara-Gora Comedy Open mic nights',
        description: 'Witness comedians test and hone content in what is the equivalent of net practice in stand up comedy',
        image: '/images/standup_comedy.jpg',
        start_time: '2022-09-12T12:30:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [80.2425, 13.0569]
      },
      properties: {
        id: '24',
        title: 'SATURDAY NIGHT',
        description: 'Gears and Garage brings to you Manoj Krishna Originals.',
        image: '/images/dj_night.jpg',
        start_time: '2022-09-17T12:30:00.000Z',
        category: 4
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.3019, 9.9921]
      },
      properties: {
        id: '27',
        title: 'E-Sports 2K22',
        location: 'Woot Gaming, Kochi',
        description: 'An ultimate football gaming festival, brought to you by Underdog Gamers. Tired of winning against the same friends again and again? It’s time to step out from your neighbourhood ground and come see where you stand in the battle among the best of the best. Learn, adapt, and improvise on the ground. Get real with your love for the game, ride the adrenaline rush, and show off your skills in the ultimate football tournament.',
        image: '/images/eSports.webp',
        start_time: '2022-08-28T18:29:29.940Z'
      }
    }
  ],
  categories: [{
    id: 1,
    image: '/images/shopping.jpg',
    categoryName: 'SHOPPING'
  },
  {
    id: 2,
    image: '/images/destination.jpeg',
    categoryName: 'DESTINATION'

  },
  {
    id: 3,
    image: '/images/drive.jpeg',
    categoryName: 'DRIVE'

  },
  {
    id: 4,
    image: '/images/entertainment.jpg',
    categoryName: 'ENTERTAINMENT'

  },
  {
    id: 5,
    image: '/images/food.jpeg',
    categoryName: 'FOOD'

  }, {
    id: 6,
    image: '/images/sports.jpg',
    categoryName: 'SPORTS'

  },
  {
    id: 7,
    image: '/images/informative.jpg',
    categoryName: 'INFORMATIVE'
  }

  ],
  savedFeeds: [
    {
      id: '1',
      img: 'https://blog.irctctourism.com/wp-content/uploads/2020/04/kerala-tourism.png',
    },
    {
      id: '2',
      img: 'https://s3.india.com/travel/wp-content/uploads/2016/05/Kerala-Kochi.jpg',
    },
    {
      id: '3',
      img: 'https://www.tataaig.com/s3/Myths-of-Travel-Insurance_5afaa8565c.jpeg',
    },
    {
      id: '4',
      img: 'https://mimeophotos.com/product_images/blog/tips-for-great-beach-photography-0.jpeg',
    },
    {
      id: '5',
      img: 'https://pbs.twimg.com/media/DhXs5YrU8AEd_hZ.jpg'
    },
    {
      id: '6',
      img: 'https://www.keralabackwater.com/blog/wp-content/uploads/2017/05/Athirappilly-Waterfalls.jpg',
    },
    {
      id: '7',
      img: 'https://i.pinimg.com/736x/8a/59/ab/8a59ab20e00e4a85fff3f77c634f1095.jpg',
    },
    {
      id: '8',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/20/be/ce/ef/mangrove-kayaking-at.jpg',
    },
    {
      id: '9',
      img: 'https://pbs.twimg.com/media/DhXs5YrU8AEd_hZ.jpg',
    },

  ],

};

export const eventSlice = createSlice({
  name: 'mapPage',
  initialState,
  reducers: {
    addNewEvent: (state, { payload }) => {
      state.events.push(payload);
    },
    addNewSavedFeed: (state, { payload }) => {
      state.savedFeeds.push(payload);
    }
  }
});

export const { addNewEvent, addNewSavedFeed } = eventSlice.actions;

export default eventSlice.reducer;
