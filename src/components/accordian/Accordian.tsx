import React, { FC } from 'react';

import { ChevronDown } from '@assets/icons';
import { AccordianProps } from './types';

const Accordian: FC<AccordianProps> = props => {
  const {
    styleConfig,
    contentConfig,
    conditionalFlag,
    dataTestId = 'accordianHeading'
  } = props;

  const {
    accordianStyle = '',
    accordianHeadingWrapperStyle = '',
    accordianIconStyle
  } = styleConfig;
  const { accordianBody, accordianHeading, handleOnClickHeading } =
    contentConfig;
  const {
    chevronDownPresent = true,
    showDetails,
    disableOnClick = false
  } = conditionalFlag;

  const handleOnClick = () => {
    if (disableOnClick) return;
    handleOnClickHeading();
  };

  return (
    <div className={`${accordianStyle} flex flex-col p-5 w-full rounded-md`}>
      <div
        className={`${accordianHeadingWrapperStyle} flex justify-between items-center w-full cursor-pointer`}
        onClick={handleOnClick}
        data-testid={dataTestId}>
        <div className="flex w-full">{accordianHeading}</div>
        {chevronDownPresent && (
          <ChevronDown
            className={`${showDetails ? 'transform  rotate-180 ' : ''}
             ${
               accordianIconStyle ? accordianIconStyle : 'ml-2'
             } opacity-100 duration-1000`}
          />
        )}
      </div>
      <div
        className={`overflow-hidden  duration-1000 transition-height ease opacity-100
       ${showDetails ? 'visible max-h-[2000px]' : ' max-h-0 invisible'}`}>
        {accordianBody}
      </div>
    </div>
  );
};

export default Accordian;
