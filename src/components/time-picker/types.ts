import { Control } from 'react-hook-form';

export type TimePickerProps = {
  name: string;
  placeholder: string;
  timeFormat?: string;
  control: Control<any, any>;
  defaultValue?: string | Date;
  errors: object;
  isDisabled?: boolean;
};
