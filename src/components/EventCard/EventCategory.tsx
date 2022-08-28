import React from 'react';
const EventCategory = ({ category }) => {

  return (

    <div className={'flex overflow-hidden  flex-col mr-3  w-52 h-[200px] bg-white rounded-lg shadow-xl'}>
      <img
        className="w-auto h-auto rounded rounded-b-none opacity-80"
        src={category?.image}
        alt="event-image"
      />
      {<div className="mt-5 mr-2 text-lg font-semibold leading-6 text-center text-gray-700 capitalize">
        {category?.categoryName}
      </div>}
    </div>);
};
export default EventCategory;