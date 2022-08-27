import React, { FC } from 'react';
import Pagination from '@mui/material/Pagination';

import useScreenDimensions from '@hooks/useScreenDimensions';
import { ROWS_PER_PAGE } from '@constants/common';
import { PaginatorProps } from './types';
import COLORS from '@constants/colors';

const sxClass = {
  '& .MuiPaginationItem-previousNext': {
    backgroundColor: COLORS.PRIMARY_COLOR,
    color: 'white'
  },

  '& .MuiPagination-ul': {
    '& .Mui-selected': {
      backgroundColor: COLORS.TEALISH_BLUE
    }
  }
};

const paginator: FC<PaginatorProps> = props => {
  const {
    totalCount,
    pageNumber = 1,
    setPageNumber,
    limit = ROWS_PER_PAGE,
    handlePaginate
  } = props;

  const { isMobileView } = useScreenDimensions();

  const handleChange = (_, page: number) => {
    setPageNumber(page);
    handlePaginate(page, limit);
  };

  const noOfPages = Math.ceil(totalCount / limit);

  const getMobileViewPaginationStyle = () => {
    if (isMobileView) return 'flex-col justify-center';
    return 'flex-row justify-end';
  };

  return (
    <div
      className={`flex ${getMobileViewPaginationStyle()} items-center w-full`}>
      <Pagination
        count={noOfPages}
        sx={sxClass}
        disabled={noOfPages <= 1}
        page={pageNumber}
        onChange={handleChange}
      />
    </div>
  );
};

export default paginator;
