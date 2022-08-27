/* eslint-disable max-len */
import Cards from '@components/cards/Cards';
import Map from '@components/map/map';
import React from 'react';

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
  'https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/backpacker-wading-through-a-river-with-his-packjpg.jpg',
];
const Home = () => {
  return (
    <div className='w-full h-full bg-white'>
      Home page
      <div className='flex overflow-auto flex-row m-3 customTransparentScroll'>
        {imgArray.map((imgUlr, index) => (
          <div key={index} className="m-2">
            <Cards img={imgUlr} />
          </div>
        ))}
      </div>
      <Map />
    </div>
  );
};

export default Home;