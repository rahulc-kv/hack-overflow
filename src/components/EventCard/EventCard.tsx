/* eslint-disable max-len */
import { LoveIcon } from '@assets/icons';
import CountDown from '@components/count-down/CountDown';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event, showEventInDetail }) => {
  const imgStyle = 'rounded-lg ';
  const navigate = useNavigate();
  const handleEventClick = () => {
    navigate('/event-details/' + event.eventId);
  };
  return (
    <div
      className={`flex flex-col shadow-xl rounded-lg w-full  bg-white ${showEventInDetail ? 'mb-4' : 'mb-0 h-[236px]'}
        
        `} role={'presentation'} onClick={() => handleEventClick()} >
      <div
        className={` relative flex items-start justify-center border-b-0 h-[200px] ${showEventInDetail ? 'w-full' : 'w-52 h-[140px]'} overflow-hidden rounded-b-none ${imgStyle}`}>
        <LoveIcon className='absolute top-2 right-3 z-10' />
        <img
          className="w-auto h-auto rounded rounded-b-none opacity-80"
          src={event?.imgSRC}
          alt="event-image"
        />
      </div>
      <div className="flex flex-col m-4 sm:m-6">
        <div className="mr-2 text-lg font-semibold leading-6 text-gray-700 capitalize">
          {event?.eventName}
        </div>
        {showEventInDetail &&
          <div className="mt-1 text-sm font-normal leading-5 text-gray-500 capitalize">
            {event?.desc}
          </div>}
        <CountDown eventStartDate={event?.startsIn} />
      </div>
    </div >
  );
};
export default EventCard;
