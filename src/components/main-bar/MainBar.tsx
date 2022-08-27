import React, { FC, useState } from 'react';

import { SearchIcon, UserIcon } from '@assets/icons';

const MainBar: FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  return (
    <div
      className="flex sticky top-0 z-50 flex-row justify-end py-2 px-4 pt-4
     w-full font-inter bg-white border-b-[1px] border-[#E5E7EB] sm:px-8">
      <div className="flex flex-row py-1 px-2 bg-gray-100 rounded-2xl">
        {showSearch && (
          <form>
            <input
              type="text"
              placeholder="Search"
              className="w-[80px] text-sm  bg-gray-100 outline-none md:w-[100px]"></input>
          </form>
        )}
        <SearchIcon
          onClick={handleSearchClick}
          className="mt-1 w-[17px] h-[17px] "
        />
      </div>

      <UserIcon fill="#989898" className="mt-2 ml-4 w-4 h-4"></UserIcon>
    </div>
  );
};

export default MainBar;
