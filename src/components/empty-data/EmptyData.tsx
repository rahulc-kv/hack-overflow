import React, { FC } from 'react';

import { Button } from '@components';
import { PlusCircle } from '@assets/icons';
import { EmptyDataProps } from './type';

const EmptyData: FC<EmptyDataProps> = props => {
  const { styleConfig, contentConfig } = props;

  const {
    wrapperStyle = 'm-4 h-[calc(100vh-180px)] md:h-[calc(100vh-140px)] sm:h-[calc(100vh-140px)] sm:m-8',
    imageStyle = 'w-[400px] sm:w-[200px] md:w-[300px] lg:w-[450px]',
    titleStyle = 'text-2xl font-semibold',
    primaryDescriptionStyle = '',
    secondaryDescriptionStyle = ''
  } = styleConfig;
  const {
    title,
    highlightedImage,
    showPrimaryButton = false,
    showSecondaryButton = false,
    showPrimaryDescription = false,
    showSecondaryDescription = false,
    primaryDescription,
    secondaryDescription,
    primaryButtonConfig,
    secondaryButtonConfig
  } = contentConfig;

  return (
    <div
      className={`flex flex-col justify-center items-center p-2 m-4
 text-sm bg-white rounded-md ${wrapperStyle}
      `}>
      <img src={highlightedImage} className={`h-auto ${imageStyle}`} />
      <div className={`text-center ${titleStyle}`}>{title}</div>
      {showPrimaryDescription && (
        <p
          className={`mt-2 font-semibold text-center sm:mt-3 ${primaryDescriptionStyle}`}>
          {primaryDescription}
        </p>
      )}
      {showSecondaryDescription && (
        <div
          className={`mt-3 text-sm text-center sm:mx-auto sm:w-3/4 text-davyGrey
              ${secondaryDescriptionStyle}
            `}>
          {secondaryDescription}
        </div>
      )}
      <div className="flex justify-center mt-4 sm:mt-8">
        {showPrimaryButton && (
          <Button
            className={`bg-primaryColor  py-1 px-3 sm:py-2 ${primaryButtonConfig?.customClass}`}
            labelClass="text-white text-[9px] sm:text-sm ml-1"
            label={primaryButtonConfig?.buttonLabel}
            Icon={PlusCircle}
            onClick={primaryButtonConfig?.buttonHandler}
            showMainViewButton={primaryButtonConfig?.showLabelInSmallScreen}
          />
        )}
        {showSecondaryButton && (
          <Button
            className={`
              bg-primaryColor py-1 px-3 sm:py-2 ${
                showPrimaryButton ? ' ml-2' : ''
              } ${secondaryButtonConfig?.customClass}`}
            labelClass="text-white text-[9px] sm:text-sm ml-1"
            label={secondaryButtonConfig?.buttonLabel}
            Icon={PlusCircle}
            onClick={secondaryButtonConfig?.buttonHandler}
            showMainViewButton={secondaryButtonConfig?.showLabelInSmallScreen}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyData;
