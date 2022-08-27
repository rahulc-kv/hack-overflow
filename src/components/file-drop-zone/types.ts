/* eslint-disable no-unused-vars */

export type FileDropZoneProps = {
  maxFileCount: number;
  handleFileSelect: (acceptedFiles: File[], rejectedFiles: File[]) => void;
  isDisabled?: boolean;
  currentUploadedFileCount: number;
  exchangeCode?: string;
  fileFormats?: string;
  uploaderSize?: 'small' | 'large';
};
