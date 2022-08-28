/* eslint-disable max-len */
import EventCard from '@components/EventCard/EventCard';
import Footer from '@components/footer/Footer';
import MainBar from '@components/main-bar/MainBar';
import React, { useState } from 'react';
import Map from '@components/map/map';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers';
import Header from '@components/header/Header';


const Explore = () => {
  const [list, setList] = useState(false);

  const { events } = useSelector(
    (state: RootState) => state.rootReducer.eventsReducer
  );

  return (
    <>
      <div className="w-full bg-white">
        <Header />

        <MainBar list={list} setList={setList} />
        {list ? (
          <Map />
        ) : (
          <div className="mx-8 mt-4 mb-20">
            {events.map(event => (
              <EventCard
                key={event.properties.id}
                event={{
                  eventName: event.properties.title,
                  desc: event.properties.description,
                  imgSRC: event.properties.image,
                  startsIn: event.properties.start_time
                }}
                showEventInDetail={true}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Explore;
