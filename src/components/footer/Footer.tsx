import { ExploreIcon, FeedIcon, SavedIcon, UserIcon } from '@assets/icons';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className=" fixed bottom-0 w-full dark:border-gray-700">
        <div className="flex flex-col w-full h-12 "></div>
        <footer
          className="fixed
             inset-x-0 bottom-0 
             text-3xl 
             text-white
            ">
          <button
            className="w-1/4 h-12 text-sm font-bold text-white  bg-white 
           outline-none shadow-sm">
            <div className="flex gap-x-1 justify-center items-center">
              <FeedIcon fill="#AEAEAE" className="w-5 h-5" />
            </div>
          </button>
          <button className="w-1/4 h-12 text-sm font-bold text-white  bg-white   outline-none ">
            <div className="flex gap-x-1 justify-center items-center">
              <ExploreIcon fill="#AEAEAE" className="w-5 h-5" />
            </div>
          </button>
          <button className="w-1/4 h-12 text-sm font-bold text-white  bg-white  outline-none ">
            <div className="flex gap-x-1 justify-center items-center">
              <SavedIcon fill="#AEAEAE" className="w-5 h-5" />
            </div>
          </button>
          <button className="w-1/4 h-12 text-sm font-bold text-white  bg-white   outline-none ">
            <div className="flex gap-x-1 justify-center items-center">
              <UserIcon fill="#AEAEAE" className="w-5 h-5" />
            </div>
          </button>
        </footer>
      </div>
    </>
  );
};

export default Footer;
