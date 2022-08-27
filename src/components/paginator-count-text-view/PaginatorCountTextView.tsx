import React, { FC } from 'react';

import { PaginatorCountTextProps } from './types';

const PaginatorCountTextView: FC<PaginatorCountTextProps> = props => {
  const {
    pageNumber,
    limitValue,
    noOfRecordsDisplayed,
    totalCount,
    dataName,
    className
  } = props;

  return (
    <div className={`flex items-center text-sm ${className}`}>
      <span className="px-1 text-primaryColor">
        {`${(pageNumber - 1) * limitValue + 1}-${
          (pageNumber - 1) * limitValue + noOfRecordsDisplayed
        }`}
      </span>
      of
      <span className="px-1 text-primaryColor"> {totalCount}</span>
      <span>{dataName}</span>
    </div>
  );
};

export default PaginatorCountTextView;
