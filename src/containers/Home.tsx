/* eslint-disable max-len */
import React from 'react';

import Carousel from '@components/carousel/Carousel';
import Footer from '@components/footer/Footer';
// import Map from '@components/map/map';
import FeedCard from '@components/feed-card/FeedCard';

const Home = () => {
  return (
    <div className="overflow-auto w-full h-full bg-white customTransparentScroll">
      Home page
      <Carousel />
      <div className="flex w-full h-auto">
        <FeedCard img="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg" />
      </div>
      {/* <div className="flex overflow-auto flex-row customTransparentScroll">

      </div> */}
      {/* <Map /> */}
      <Footer />
    </div>
  );
};

export default Home;
