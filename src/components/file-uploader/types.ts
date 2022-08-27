/* eslint-disable no-unused-vars */
import { ChangeEventHandler } from 'react';

export type FileUploaderProps = {
  label: string;
  name: string;
  acceptedFormats?: string;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};
