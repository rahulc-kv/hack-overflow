import { Control } from 'react-hook-form';

export type ToggleSwitchProps = {
  name: string;
  control: Control<any, any>;
  isDisabled?: boolean;
};
