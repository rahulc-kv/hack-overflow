import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative bg-gradient-to-b from-gray-100 via-gray-800 to-black">
        <SwiperSlide>
          <img
            className="object-cover w-full h-[260px] opacity-50"
            src="/images/arts_and_crafts_mela.jpg"
            alt="image slide 1"
          />
          <div className="absolute bottom-9 left-2 text-sm text-white">Bangalore Arts And Crafts Mela</div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-[260px] opacity-50"
            src="/images/karaoke.jpg"
            alt="image slide 2"
          />
          <div className="absolute bottom-9 left-2 text-sm text-white">Koramangala Karaoke Night</div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-[260px] opacity-50"
            src="/images/chocolate_festival.jpg"
            alt="image slide 3"
          />
          <div className="absolute bottom-9 left-2 text-sm text-white">Lulu Chocolate Festival</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
