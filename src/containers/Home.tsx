/* eslint-disable max-len */
import Cards from '@components/cards/Cards';
import CountDown from '@components/count-down/CountDown';
import React from 'react';

import Carousel from '@components/carousel/Carousel';
import Footer from '@components/footer/Footer';
import FeedCard from '@components/feed-card/FeedCard';


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

const Home = () => {
  return (
    <div className="w-full h-full bg-white">
      <Carousel />
      <div className="flex overflow-auto flex-row m-3 customTransparentScroll">
        {imgArray.map((imgUlr, index) => (
          <div key={index} className="m-2">
            <Cards img={imgUlr} />
          </div>
        ))}
      </div>
      <CountDown eventStartDate="2022-08-27T18:29:29.940Z" />
      <div className="flex w-full h-auto">
        <FeedCard img="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
