/* eslint-disable max-len */
import React from 'react';

import Carousel from '@components/carousel/Carousel';
import Footer from '@components/footer/Footer';
import Slider from 'Slider/Slider';
import Header from '@components/header/Header';

const Home = () => {
  return (
    <div className="w-full bg-white">
      <Header/>
    <Carousel />
      <Slider />
      <div className="flex mb-5 w-full h-auto">
      </div>
      <Footer />
    </div>
  );
};

export default Home;
