/* eslint-disable no-unused-vars */
import { HTMLAttributes } from 'react';

export type ListBoxComponentProps = HTMLAttributes<HTMLElement> &
  ListBoxComponentExtendedProps;

type ListBoxComponentExtendedProps = {
  showCheckBox?: boolean;
  showId?: boolean;
  selectedValues?: string;
  handleCheckBoxClick?: (selectedValues: string) => void;
};

export type InnerElementContextProps = {
  tooltipVisibility?: boolean;
  showCheckBox?: boolean;
  selectedValues?: string;
  showId?: boolean;
  handleCheckBoxClick?: (selectedValues: string) => void;
};
