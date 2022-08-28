import { LikedIcon } from '@assets/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers';

const SavedFeed = () => {

    const { savedFeeds } = useSelector(
        (state: RootState) => state.rootReducer.eventsReducer
      );


    return (
        <div className=" flex flex-wrap gap-2 pt-2 pb-12 pl-1">
            {savedFeeds.map(feed => {
                return (
                    <div key={feed.id} className="flex relative flex-col flex-nowrap items-center 
                w-[180px] h-[180px] bg-white hover:bg-gray-100 rounded-md">
                        <img
                            className="w-[180px] h-[180px] rounded-md"
                            src={feed.img} alt="event-image"
                        />
                        <div className="absolute right-2 bottom-1 w-5 h-5 p-1 bg-white shadow-sm rounded-full">
                            <LikedIcon fill="#D2042D"/>
                        </div>
                    </div>

                );
            })}

        </div>

    );
};

export default SavedFeed;