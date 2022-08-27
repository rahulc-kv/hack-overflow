/* eslint-disable max-len */
import EventCard from '@components/EventCard/EventCard';
import Footer from '@components/footer/Footer';
import MainBar from '@components/main-bar/MainBar';
import React, { useState } from 'react';
import Map from '@components/map/map';

const eventList = [
  {
    eventName: 'Football Tournament',
    desc: 'Champions League-annual club Football competition ',
    imgSRC:
      'https://images.pexels.com/photos/15203/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    eventName: 'Football Tournament',
    desc: 'Champions League-annual club Football competition ',
    imgSRC:
      'https://images.pexels.com/photos/15203/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    eventName: 'Football Tournament',
    desc: 'Champions League-annual club Football competition ',
    imgSRC:
      'https://images.pexels.com/photos/15203/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    eventName: 'Football Tournament',
    desc: 'Champions League-annual club Football competition ',
    imgSRC:
      'https://images.pexels.com/photos/15203/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600'
  }
];
const Explore = () => {

  const [list, setList] = useState(false);

  return (
    <>
      <div className="w-full">
        <MainBar list={list} setList={setList} />
        {list ?
          (
            <Map />
           
          ) :
          (<div className="mx-8 mt-4 mb-20">

            {eventList.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}

          </div>)
        }

      </div>
      <Footer />
    </>
  );
};
export default Explore;
