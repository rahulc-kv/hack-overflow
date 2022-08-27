import React from 'react';

const Footer = () => {
  return (
    <>
      <div className=" fixed bottom-0 w-full border-b border-gray-200 dark:border-gray-700">
        <div className="w-full flex flex-col h-12 "></div>
        <footer
          className="fixed
             inset-x-0 bottom-0 
             text-3xl 
             text-white
   
             border-t-1
             border-gray-500">
          <button className="w-1/4 h-12 text-sm font-bold text-white bg-gray-300  hover:border-gray-400 outline-none shadow-sm">
            <div className="flex gap-x-1 justify-center items-center align-center">
              Feed
            </div>
          </button>
          <button className="w-1/4 h-12 text-sm font-bold text-white bg-gray-300  outline-none shadow-sm">
            <div className="flex gap-x-1 justify-center items-center align-center">
              Explore
            </div>
          </button>
          <button className="w-1/4 h-12 text-sm font-bold text-white bg-gray-300  outline-none shadow-sm">
            <div className="flex gap-x-1 justify-center items-center align-center">
              Saved
            </div>
          </button>
          <button className="w-1/4 h-12 text-sm font-bold text-white bg-gray-300  outline-none shadow-sm">
            <div className="flex gap-x-1 justify-center items-center align-center">
              My Profile
            </div>
          </button>
        </footer>
      </div>
    </>
  );
};

export default Footer;
