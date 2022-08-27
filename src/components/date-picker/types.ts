import { Control } from 'react-hook-form';

export type DatePickerProps = {
  name: string;
  placeholder: string;
  dateFormat?: string;
  control: Control<any, any>;
  defaultValue?: string | Date;
  errors: object;
  isDisabled?: boolean;
};
