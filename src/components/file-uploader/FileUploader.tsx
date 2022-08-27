import React, { FC } from 'react';

import { UploadIcon } from '@assets/icons';
import { FileUploaderProps } from './types';

const FileUploader: FC<FileUploaderProps> = props => {
  const { label, name, acceptedFormats = '', handleOnChange } = props;

  return (
    <>
      <input
        id={name}
        type="file"
        name={name}
        accept={acceptedFormats}
        className="overflow-hidden absolute w-0 h-0 opacity-0"
        onChange={handleOnChange}
        data-testid="fileUploaderInput"
      />
      <label htmlFor={name} className="cursor-pointer">
        <div
          className="flex flex-row justify-center items-center py-[7px] px-[17px]
           text-sm text-white bg-primaryColor rounded-md 2xl:px-[65px]">
          <UploadIcon width={24} height={24} className="mr-[9px]" />
          {label}
        </div>
      </label>
    </>
  );
};

export default FileUploader;
