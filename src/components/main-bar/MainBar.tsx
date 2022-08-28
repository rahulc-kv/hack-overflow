import React, { useState } from 'react';

import { FilterIcon, ListIcon, SearchIcon, ShowMap } from '@assets/icons';

const MainBar = ({ list, setList }) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleToggle = () => {
    setList(!list);
  };

  return (
    <div
      className="flex sticky  top-0 z-50  px-4 pt-3 pb-2
       w-full h-14 font-inter bg-white border-b-[1px] border-[#E5E7EB] ">
      <div className="flex  absolute left-4 flex-row py-1 px-2 bg-gray-100 rounded-lg">
        <SearchIcon
          onClick={handleSearchClick}
          className="mt-1 h-[17px]"
        />
        {showSearch && (
          <form>
            <input
              type="text"
              placeholder="Search"
              className="pl-2 w-[70px] text-sm  bg-gray-100 outline-none md:w-[100px]"></input>
          </form>
        )}
      </div>
      <div className="flex absolute right-4 flex-row">
        {list ?
          (<div><ListIcon onClick={handleToggle} fill="#AEAEAE" className="mt-2 mr-4 h-[17px]" /> </div>) :
          (<div><ShowMap onClick={handleToggle} fill="#AEAEAE" className="mt-2 mr-4 h-[17px]" /> </div>)
        }
        <div><FilterIcon fill="#AEAEAE" className="mt-2 h-[17px]" /></div>
      </div>

    </div>
  );
};

export default MainBar;
