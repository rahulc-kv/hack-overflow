import React, { FC } from 'react';

import { InfoIconGrey, LeftArrow } from '@assets/icons';
import { TopBarProps } from './types';
import { Button, SelectBox, Tooltip } from '@components';

const TopBar: FC<TopBarProps> = props => {
  const {
    title = '',
    showPrimaryButton = false,
    showSecondaryButton = false,
    primaryButtonConfig = {},
    secondaryButtonConfig = {},
    primaryButtonDisabled = false,
    secondaryButtonDisabled = false,
    showNavigateBack = false,
    handleBackClick = () => null,
    showFilter = false,
    selectFilterMenu,
    handleSelectBoxClick,
    showInfoIcon = false,
    infoIconContent
  } = props;

  return (
    <div
      className="flex sticky top-0 z-50 flex-row justify-between py-5
     px-4 w-full h-14 font-inter bg-white border-b-[1px] border-[#E5E7EB] sm:px-8">
      <div className="flex items-center text-base font-semibold text-blackGreen sm:text-2xl">
        {showNavigateBack && (
          <LeftArrow
            className="mr-2 cursor-pointer"
            onClick={handleBackClick}
          />
        )}
        {title}
        {showFilter && (
          <div className="flex items-center ml-8">
            <SelectBox
              menuItems={selectFilterMenu}
              handleSelectBoxClick={value => handleSelectBoxClick(value)}
            />
          </div>
        )}
      </div>

      <div className="flex items-center">
        {showInfoIcon && (
          <Tooltip body={infoIconContent} contentNoWrap={false}>
            <InfoIconGrey width="28" height="28" className="mr-4" />
          </Tooltip>
        )}
        {showSecondaryButton && (
          <Button
            onClick={secondaryButtonConfig.buttonHandler}
            className={`sm:py-3 sm:px-5 ${secondaryButtonConfig.customClass}`}
            disabled={secondaryButtonDisabled}
            Icon={secondaryButtonConfig.icon}
            iconClass={secondaryButtonConfig.iconClass}
            label={secondaryButtonConfig.buttonLabel}
            breakpoint={850}
          />
        )}

        {showPrimaryButton && (
          <Button
            className={`ml-2 sm:py-3 sm:px-5 sm:ml-3 ${primaryButtonConfig.customClass}`}
            onClick={primaryButtonConfig.buttonHandler}
            disabled={primaryButtonDisabled}
            Icon={primaryButtonConfig.icon}
            label={primaryButtonConfig.buttonLabel}
            breakpoint={850}
          />
        )}
      </div>
    </div>
  );
};

export default TopBar;
