import { Dispatch, SetStateAction } from 'react';

/* eslint-disable no-unused-vars */
export type PaginatorProps = {
  totalCount: number;
  limit?: number;
  pageNumber?: number;
  setPageNumber?: Dispatch<SetStateAction<number>>;
  handlePaginate: (arg1: number, arg2: number) => void;
};
