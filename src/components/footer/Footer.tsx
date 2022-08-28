import {
  ExploreIcon, FeedIcon, PlusCircle, SavedIcon, UserIcon
} from '@assets/icons';
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
    <div className="fixed bottom-0 z-20 mt-10 w-full bg-white shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col w-full h-12 "></div>
      <footer
        className="fixed
             flex
             inset-x-0 bottom-0 
             text-3xl
             justify-evenly
            ">
        <div>
          <button
            className={` h-12 text-sm font-bold bg-slate 
            outline-none shadow-sm  `}
            onClick={() => handleNavigate('home')}
          >
            <div className="flex gap-x-1 justify-center items-center">
              <FeedIcon onClick={() => handleNavigate('home')}
                fill={`  ${buttonId == '/home' ? ('#000000') : ('#AEAEAE')}`}
                className="w-5 h-5" />
            </div>
          </button>
        </div>
        <div>
          <button
            className={` h-12 text-sm font-bold text-white  bg-slate 
              outline-none shadow-sm `}
            onClick={() => handleNavigate('explore')}>
            <div className="flex gap-x-1 justify-center items-center">
              <ExploreIcon fill={` ${buttonId == '/explore' ? ('#000000') : ('#AEAEAE')}`} className="w-5 h-5" />
            </div>
          </button>
        </div>
        <div className=''>
          <button
            className={`w-10 h-10 text-sm font-bold  bg-red-500 
              outline-none shadow-sm  rounded-full`}
            onClick={() => handleNavigate('plus')}>
            <div className="flex gap-x-1 justify-center items-center">
              <PlusCircle
                fill={` ${buttonId == '/plus' ? ('white') : ('white')}`} stroke='white' className="w-5 h-5" />
            </div>
          </button>
        </div>
        <div>
          <button
            className={` h-12 text-sm font-bold bg-slate 
              outline-none shadow-sm rounded-full`}>
            <div className="flex gap-x-1 justify-center items-center">
              <SavedIcon onClick={() => handleNavigate('saved')}
                fill={` ${buttonId == '/saved' ? ('#000000') : ('#AEAEAE')}`} className="w-5 h-5" />
            </div>
          </button>
        </div>
        <div>
          <button className={`h-12 text-sm font-bold text-white  bg-slate 
            outline-none shadow-sm `}>
            <div className="flex gap-x-1 justify-center items-center">
              <UserIcon onClick={() => handleNavigate('user')}
                fill={` ${buttonId == '/user' ? ('#000000') : ('#AEAEAE')}`} className="w-5 h-5" />
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
