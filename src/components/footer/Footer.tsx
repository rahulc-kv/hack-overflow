import { ExploreIcon, FeedIcon, SavedIcon, UserIcon } from '@assets/icons';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const location = useLocation();
  
  const [buttonId, setButtonId] = useState(location.pathname);
  
  const handleNavigate = loc => {
    navigate('/' + loc);
    setButtonId('/' + loc);
  };
  
  return (
    <>
      <div className=" fixed bottom-0 mt-10 w-full dark:border-gray-700">
        <div className="flex flex-col w-full h-12 "></div>
        <footer
          className="fixed
             inset-x-0 bottom-0 
             text-3xl 
            ">
          <button
            className={`w-1/4 h-12 text-sm font-bold text-white  bg-white 
           outline-none shadow-sm ${buttonId == '/home' ? ('bg-blue-50') : ('bg-white')}`}>
            <div className="flex gap-x-1 justify-center items-center">
              <FeedIcon onClick={() => handleNavigate('home')}
                fill={`  ${buttonId == '/home' ? ('#0000FF') : ('#AEAEAE')}`}
                className="w-5 h-5 " />
            </div>
          </button>
          <button
            className={`w-1/4 h-12 text-sm font-bold text-white  bg-white 
            outline-none shadow-sm ${buttonId == '/explore' ? ('bg-blue-50') : ('bg-white')}`}
            onClick={() => handleNavigate('explore')}>
            <div className="flex gap-x-1 justify-center items-center">
              <ExploreIcon fill={` ${buttonId == '/explore' ? ('#0000FF') : ('#AEAEAE')}`} className="w-5 h-5" />
            </div>
          </button>
          <button
            className={`w-1/4 h-12 text-sm font-bold text-white  bg-white 
            outline-none shadow-sm ${buttonId == '/saved' ? ('bg-blue-50') : ('bg-white')}`}>
            <div className="flex gap-x-1 justify-center items-center">
              <SavedIcon onClick={() => handleNavigate('saved')}
                fill={` ${buttonId == '/saved' ? ('#0000FF') : ('#AEAEAE')}`} className="w-5 h-5" />
            </div>
          </button>
          <button className={`w-1/4 h-12 text-sm font-bold text-white  bg-white 
            outline-none shadow-sm ${buttonId == '/user' ? ('bg-blue-50') : ('bg-white')}`}>
            <div className="flex gap-x-1 justify-center items-center">
              <UserIcon onClick={() => handleNavigate('user')} 
              fill={` ${buttonId == '/user' ? ('#0000FF') : ('#AEAEAE')}`} className="w-5 h-5" />
            </div>
          </button>
        </footer>
      </div>
    </>
  );
};

export default Footer;
