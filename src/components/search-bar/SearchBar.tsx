import React, { FC } from 'react';

import { SearchIcon } from '@assets/icons';
import { SearchBarProps } from './types';

const SearchBar: FC<SearchBarProps> = props => {
  const {
    searchValue,
    handleChange,
    placeholder = 'Search',
    customClass = 'p-2 h-[38px]'
  } = props;
  return (
    <div
      className={`flex items-center min-w-[120px] ${customClass}
     bg-[#F3F5F7] rounded-md border-[1px] border-[#F3F5F7]`}>
      <SearchIcon />
      <input
        className="overflow-hidden ml-1 w-full h-full text-sm font-medium placeholder:text-slateGrey
          bg-[#F3F5F7] rounded-md outline-none"
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
