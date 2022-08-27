/* eslint-disable no-unused-vars */
import { Control } from 'react-hook-form';

export type SelectDropdowndProps = {
  name: string;
  placeholder: string;
  validation?: object;
  control: Control<any, any>;
  dropdownLOV: {
    id: string;
    name: string;
  }[];
  errors?: object;
  isDisabled?: boolean;
  selectedItem?: string;
  onChangeHandler?: (selectedItem: string) => void;
};
