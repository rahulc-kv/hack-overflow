import { FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  name: string;
  placeholder: string;
  validation?: object;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors?: object;
};
