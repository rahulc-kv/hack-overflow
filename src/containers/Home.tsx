/* eslint-disable max-len */
import React from 'react';

import Carousel from '@components/carousel/Carousel';
import Footer from '@components/footer/Footer';
import FeedCard from '@components/feed-card/FeedCard';
import Slider from 'Slider/Slider';

const Home = () => {
  return (
    <div className="w-full bg-white">
      <Carousel />

      <Slider />
      <div className="flex mb-5 w-full h-auto">
        <FeedCard img="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
