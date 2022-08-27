/* eslint-disable max-len */
import EventCard from '@components/EventCard/EventCard';
import Footer from '@components/footer/Footer';
import React from 'react';

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
  return (
    <>
      <div className="mx-8 mb-20 h-full max-h-screen">
        {eventList.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Explore;
