/* eslint-disable max-len */
import React from 'react';

const EventCard = ({ event }) => {
  const imgStyle = 'border-4 rounded-lg border-gray-300 ';

  return (
    <div
      className={`flex flex-col shadow-lg rounded-lg w-full mb-4 bg-white 
        
        `}>
      <div className={`border-b-0  rounded-b-none ${imgStyle}`}>
        <img
          className="rounded rounded-b-none "
          src={event?.imgSRC}
          alt="event-image"
        />
      </div>
      <div className="flex flex-col m-4 sm:m-6">
        <div className="mr-2 text-lg font-semibold leading-6 text-gray-700 capitalize">
          {event?.eventName}
        </div>
        <div className="mt-1 text-sm font-normal leading-5 text-gray-500 capitalize">
          {event?.desc}
        </div>
      </div>
    </div>
  );
};
export default EventCard;
