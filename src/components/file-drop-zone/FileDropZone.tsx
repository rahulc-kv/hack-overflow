import React, { FC, useCallback } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';

import { StringToTSX } from '@components/stringToTsx/StringToTsx';
import { ExportDynamicIcon, FileIcon } from '@assets/icons';
import { translate } from '@utils/locale';
import {
  SUPPORTED_FILE_EXTENSIONS,
  SUPPORTED_FILE_FORMATS
} from '@constants/common';
import { FileDropZoneProps } from './types';
import COLORS from '@constants/colors';

const FileDropZone: FC<FileDropZoneProps> = props => {
  const {
    maxFileCount,
    handleFileSelect,
    isDisabled = false,
    currentUploadedFileCount,
    exchangeCode = 'DEFAULT',
    fileFormats = SUPPORTED_FILE_EXTENSIONS.DEFAULT,
    uploaderSize = 'large'
  } = props;

  const handleOnDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const formattedRejectedFiles = rejectedFiles.map(
        fileData => fileData.file
      );
      // total number of selected file will be acceptedFiles.length + currentUploadedFileCount
      /*
         if the total number of files is greater than maxFileCount, then we will reject the
         remaining files after accepting up to maxFileCount
      */
      if (acceptedFiles.length + currentUploadedFileCount > maxFileCount) {
        /* 
          We will accept only up to "maxFileCount". If the count of user-picked files is greater
          than maxFileCount, then we will take the first n items and the rest of the items 
          will consider as rejected files
        */
        const slicingIndex = maxFileCount - currentUploadedFileCount;
        /*
          first param is acceptedFiles and the second one is rejectedFiles. In this case 
          the rejectedFiles will be a concatenated array of 'formattedRejectedFiles' 
          and the remaining files after accepting the allowed number of files from 
          the list picked by the user 
        */
        handleFileSelect([...acceptedFiles].slice(0, slicingIndex), [
          ...[...acceptedFiles].slice(slicingIndex),
          ...formattedRejectedFiles
        ]);
        return;
      }
      handleFileSelect(acceptedFiles, formattedRejectedFiles);
    },
    [currentUploadedFileCount, maxFileCount]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept:
      SUPPORTED_FILE_FORMATS[exchangeCode] || SUPPORTED_FILE_FORMATS.DEFAULT,
    multiple: true,
    onDrop: handleOnDrop,
    disabled: isDisabled
  });

  return (
    <>
      {uploaderSize === 'large' ? (
        <div
          className={`flex flex-col justify-center items-center px-2 py-[18px] text-center rounded-md border-[1px]
        ${
          isDisabled
            ? 'border-greyCloud cursor-not-allowed'
            : 'border-primaryColor cursor-pointer'
        } border-dashed`}
          {...getRootProps()}>
          <FileIcon
            fill={isDisabled ? COLORS.GREY_CLOUD : COLORS.PRIMARY_COLOR}
          />
          <input data-testid="dropInput" {...getInputProps()} />
          <p className="mt-[6px] text-sm font-normal text-davyGrey">
            {
              <StringToTSX
                domString={translate('sourcePage.dropFile', {
                  color: isDisabled ? COLORS.SLATE_GREY : COLORS.PRIMARY_COLOR
                })}
              />
            }
          </p>
          <p className="text-sm font-normal text-slateGrey ">{fileFormats}</p>
        </div>
      ) : (
        <div
          className={`flex flex-row justify-start items-center px-4 py-[6px] text-center rounded-md border-[1px]
      ${
        isDisabled
          ? 'border-greyCloud cursor-not-allowed'
          : 'border-primaryColor cursor-pointer'
      } border-dashed`}
          {...getRootProps()}>
          <ExportDynamicIcon
            fill={isDisabled ? COLORS.GREY_CLOUD : COLORS.BLACK_GREEN}
          />
          <p className="ml-[11px] text-sm font-normal text-davyGrey">
            {
              <StringToTSX
                domString={translate('sourcePage.dropFile', {
                  color: isDisabled ? COLORS.SLATE_GREY : COLORS.PRIMARY_COLOR
                })}
              />
            }
          </p>
          <input data-testid="dropInput" {...getInputProps()} />
        </div>
      )}
    </>
  );
};

export default FileDropZone;
