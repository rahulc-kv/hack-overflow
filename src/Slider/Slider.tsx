import React from 'react';

import Cards from '@components/cards/Cards';

/* eslint-disable max-len */
const Slider = () => {
  const sliderHeaders = [
    {
      title: 'Latest & Trending',
      imgArray: [
        '/images/abc.jpg',
        '/images/abc1.jpg',
        '/images/abc2.jpg',
        '/images/abc3.jpg',
        '/images/abc4.jpg',
        '/images/abc6.jpg'
      ]
    },
    {
      title: 'Most Popular',
      imgArray: [
        '/images/abc.jpg',
        '/images/abc1.jpg',
        '/images/abc2.jpg',
        '/images/abc3.jpg',
        '/images/abc4.jpg',
        '/images/abc6.jpg'
      ]
    },
    {
      title: 'Recommended For You',
      imgArray: [
        '/images/abc.jpg',
        '/images/abc1.jpg',
        '/images/abc2.jpg',
        '/images/abc3.jpg',
        '/images/abc4.jpg',
        '/images/abc6.jpg'
      ]
    }
  ];
  return (
    <div className="w-full">
      <div className="flex  flex-col">
        {sliderHeaders.map((headerData, index) => (
          <div key={index} className="flex flex-col py-4 my-3 bg-white shadow-lg drop-shadow-sm">
            <div className="pl-2 text-sm font-medium text-black">
              {headerData.title}
            </div>
            <div className="flex overflow-auto flex-row customTransparentScroll">
              {headerData.imgArray.map((imgUrl, i) => (
                <div key={i} className="m-2">
                  <Cards img={imgUrl} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
