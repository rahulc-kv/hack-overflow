/* eslint-disable no-unused-vars */
import React, { ClipboardEventHandler } from 'react';
import { Control } from 'react-hook-form';

export type CustomTextFieldProps = {
  isControlledField?: boolean;
  autoComplete?: string;
  control?: Control<any, any>;
  name?: string;
  errors?: object;
  showInfoIcon?: boolean;
  infoText?: string;
  isDisabled?: boolean;
  endAdornment?: React.ReactNode;
  customClass?: object;
  testid?: string;
  onCut?: ClipboardEventHandler<HTMLDivElement>;
  onCopy?: ClipboardEventHandler<HTMLDivElement>;
  onPaste?: ClipboardEventHandler<HTMLDivElement>;
};
