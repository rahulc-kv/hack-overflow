import React, { FC } from 'react';
import { Tooltip } from '@mui/material';

import {
  GreenTickFillIcon,
  CloseIcon,
  RefreshIconLite,
  CrossIconRoundRed
} from '@assets/icons';
import { FILE_UPLOAD_STATUS } from '@constants/common';
import { translate } from '@utils/locale';
import { FileUploadCardProps } from './types';
import COLORS from '@constants/colors';

const FileUploadCard: FC<FileUploadCardProps> = props => {
  const { id, fileName, status, handleClose } = props;

  const renderContent = () => {
    switch (status) {
      case FILE_UPLOAD_STATUS.success:
        return (
          <div className="flex flex-row justify-between items-center text-sm font-normal text-slateGrey">
            <div className="flex flex-row w-[90%]">
              <div className="mr-[5px] w-[22px] h-[22px]">
                <GreenTickFillIcon width={22} height={22} />
              </div>
              <Tooltip title={fileName} arrow={true} enterTouchDelay={0}>
                <div className="truncate">{fileName}</div>
              </Tooltip>
            </div>
            <CloseIcon
              stroke={COLORS.DAVY_GREY}
              className="cursor-pointer"
              onClick={() => handleClose(id, status)}
              data-testid="closeSuccess"
            />
          </div>
        );
      case FILE_UPLOAD_STATUS.uploading:
        return (
          <div className="flex flex-row justify-between items-center text-sm font-normal text-slateGrey">
            <div className="flex flex-row w-[90%]">
              <div
                className="flex justify-center items-center p-1 mr-[5px] w-[21px] h-[21px]
                bg-slateGrey rounded-[50%]">
                <RefreshIconLite
                  width={11}
                  height={11}
                  className="animate-rotate"
                />
              </div>
              <Tooltip title={fileName} arrow={true} enterTouchDelay={0}>
                <div className="truncate">{fileName}</div>
              </Tooltip>
            </div>
            <CloseIcon
              stroke={COLORS.DAVY_GREY}
              className="cursor-pointer"
              onClick={() => handleClose(id, status)}
              data-testid="closeUploading"
            />
          </div>
        );
      case FILE_UPLOAD_STATUS.failed:
        return (
          <div className="flex flex-row justify-between items-center w-full text-sm font-normal text-slateGrey">
            <div className="flex flex-row w-[70%]">
              <div className="mr-[5px] w-[22px] h-[22px]">
                <CrossIconRoundRed width={22} height={22} />
              </div>
              <Tooltip title={fileName} arrow={true} enterTouchDelay={0}>
                <div className="truncate">{fileName}</div>
              </Tooltip>
            </div>
            <div className="flex flex-row items-center">
              <div
                className="py-[1px] px-[9px] mr-1 min-w-[50px] text-[11px] font-normal 
              text-slateGrey bg-harp rounded-[100px]">
                {translate('sourcePage.failed')}
              </div>
              <CloseIcon
                stroke={COLORS.DAVY_GREY}
                className="cursor-pointer"
                onClick={() => handleClose(id, status)}
                data-testid="closeFailed"
              />
            </div>
          </div>
        );
    }
  };
  return (
    <div className="py-2 px-[10px] rounded-md border-[1px] border-greyCloud">
      {renderContent()}
    </div>
  );
};

export default FileUploadCard;
