/* eslint-disable max-len */
import React from 'react';

import Carousel from '@components/carousel/Carousel';
import Map from '@components/map/map';

const Home = () => {
  return (
    <div className="w-full h-full bg-white">
      Home page
      <Carousel />
      <div className="flex overflow-auto flex-row m-3 customTransparentScroll"></div>
      <Map />
    </div>
  );
};

export default Home;
