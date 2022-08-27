import React, { FC } from 'react';

import { CloseIcon } from '@assets/icons';
import { translate } from '@utils/locale';
import { RejectedFileSectionProps } from './types';
import COLORS from '@constants/colors';

const RejectedFileSection: FC<RejectedFileSectionProps> = props => {
  const { failedFileDetails, handleClose } = props;

  return (
    <div
      className="flex flex-row justify-between items-center py-3 px-[10px] bg-roseWhite 
    rounded-md border-[1px] border-coralRed border-dashed">
      <div>
        <p className="text-sm font-normal">
          {translate('sourcePage.followingFilesNotUploaded')}
        </p>
        <div className="pt-1 text-sm font-normal text-slateGrey break-all">
          {failedFileDetails.reduce((fileNames, fileData, index) => {
            if (index !== 0) {
              return fileNames.concat(', ').concat(fileData.name);
            }
            return fileNames.concat(fileData.name);
          }, '')}
        </div>
      </div>
      <div className="ml-3">
        <CloseIcon
          stroke={COLORS.DAVY_GREY}
          className="cursor-pointer"
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default RejectedFileSection;
