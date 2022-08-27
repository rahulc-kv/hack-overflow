import React from 'react';

import Cards from '@components/cards/Cards';

/* eslint-disable max-len */
const Slider = () => {
  const sliderHeaders = [
    'Latest & Trending',
    'Most Popular',
    'Recommended For You'
  ];
  const imgArray = [
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
    'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg'
  ];
  return (
    <div className="w-full bg-white">
      <div className="flex  flex-col">
        {sliderHeaders.map((header, index) => (
          <div key={index} className="flex flex-col py-2 my-1 bg-whiteSmoke">
            <div className="text-lg font-bold text-black border-red-300">
              {header}
            </div>
            <div className="flex overflow-auto flex-row customTransparentScroll">
              {imgArray.map((imgUrl, i) => (
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
