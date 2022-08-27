import { Control } from 'react-hook-form';

export type SelectFieldProps = {
  name: string;
  placeholder: string;
  validation?: object;
  control: Control<any, any>;
  dropdownLOV: {
    id: string;
    name: string;
  }[];
  errors?: object;
  selectedItem?: string;
  isDisabled?: boolean;
};
