import React from 'react';

import { RootState } from '@store/reducers';
import { useSelector } from 'react-redux';
import EventCard from '@components/EventCard/EventCard';
import EventCategory from '@components/EventCard/EventCategory';

/* eslint-disable max-len */
const Slider = () => {
  const sliderHeaders = [
    {
      title: 'Categories',
    },
    {
      title: 'Most Popular',
    },
    {
      title: 'Recommended For You',
    }
  ];
  const { events, categories } = useSelector(
    (state: RootState) => state.rootReducer.eventsReducer
  );
  return (
    <div className="w-full">
      <div className="flex  flex-col">
        {sliderHeaders.map((headerData, index) => (
          <div key={index} className="flex flex-col pt-4 mt-3 bg-white shadow-md drop-shadow-sm">
            <div className="pl-2 mb-4 text-base font-semibold text-black">
              {headerData.title}
            </div>
            <div className="flex overflow-auto flex-row mx-3 h-full customTransparentScroll">
              {index === 0 ?
                (<div className='flex mr-4 h-[200px]'>
                  {categories.map(category => (
                    <EventCategory category={category} key={category.id} />))}
                </div>
                ) : (
                  <>
                    {events.map(event => (
                      <div key={event.properties.id} className='mr-4 w-full h-full'>
                        <EventCard
                          event={{
                            eventName: event.properties.title,
                            desc: event.properties.description,
                            imgSRC: event.properties.image,
                            startsIn: event.properties.start_time
                          }}
                          showEventInDetail={false}
                        />
                      </div>
                    ))}
                  </>
                )}
            </div>          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
