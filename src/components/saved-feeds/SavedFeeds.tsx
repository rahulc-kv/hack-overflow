import { LikedIcon } from '@assets/icons';
import React from 'react';

const SavedFeed = () => {

    const savedFeeds = [
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

    ];


    return (
        <div className=" flex flex-wrap gap-2 pt-2 pl-1">
            {savedFeeds.map(feed => {
                return (
                    <div key={feed.id} className="flex relative flex-col flex-nowrap items-center 
                w-[180px] h-[180px] bg-white hover:bg-gray-100 rounded-md">
                        <img
                            className="w-[180px] h-[180px] rounded-md"
                            src={feed.img}                           alt="event-image"
                        />
                        <LikedIcon fill="#D2042D" className="absolute right-2 bottom-1 w-5 h-5"/>
                    </div>

                );
            })}

        </div>

    );
};

export default SavedFeed;